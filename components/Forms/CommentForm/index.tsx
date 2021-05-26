import React, { useState, useEffect } from "react";

import draftToHtml from "draftjs-to-html";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import TextEditor from "../TextEditor";
import { Button } from "@material-ui/core";
import { placeholder } from "./constants";
import { IComment } from "../../Comment";
import { usePost, usePostForImage, usePut } from "../../../hooks/requests";
import {
  COMMENT_URL,
  HOME_URL_WITHOUT_SLASH,
  UPLOAD_IMAGE_URL,
} from "../../../hooks/constants";
import Spinner from "../../Spinner";

const useStyles = makeStyles((theme: Theme) => ({
  container: {},
  button: {
    marginBottom: 20,
    background: "teal",
    color: "white",
    "&:hover": {
      background: "black",
    },
  },
  editor: {
    border: "10px solid #FAF8F9",
  },
  commentButton: {
    marginTop: 10,
    background: "teal",
    color: "white",
    "&:hover": {
      background: "black",
    },
  },
}));

const CommentForm = ({
  onSuccess,
  feedId,
  data,
}: {
  onSuccess: (comment: IComment) => void;
  feedId?: number;
  data?: IComment;
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [clicked, setClicked] = useState(false);
  const [posting, setPosting] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (data && data.id) {
      const html = data.text;
      const blocksFromHTML = convertFromHTML(html);
      const newEditorState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(newEditorState));
    }
  }, [data]);

  function uploadCallback(file: File) {
    return new Promise(async (resolve, reject) => {
      const upload = async (file) => {
        let formData = new FormData();
        formData.append("image", file);

        const [imageData, error] = await usePostForImage(
          UPLOAD_IMAGE_URL,
          formData,
          {
            "content-type": "multipart/form-data",
          }
        );

        if (!error) {
          resolve({ data: { link: HOME_URL_WITHOUT_SLASH + imageData.src } });
        }
      };

      await upload(file);
    });
  }

  const onEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState);
  };

  const addComment = async () => {
    setPosting(true);
    const rawState = convertToRaw(editorState.getCurrentContent());
    const text = draftToHtml(rawState);
    if (data && data.id) {
      const URL = COMMENT_URL + `${data.id}/`;
      const [newComment, error] = await usePut(URL, { text });
      onSuccess(newComment);
    } else {
      if (feedId) {
        const URL = COMMENT_URL + `?feed=${feedId}`;
        const [comment, error] = await usePost(URL, {
          text,
        });

        onSuccess(comment);
        setEditorState(EditorState.createEmpty());
      }
    }
    setPosting(false);
  };

  return (
    <div className={classes.container}>
      {!(data && data.id) && !clicked ? (
        <Button
          className={classes.button}
          color="secondary"
          onClick={() => setClicked(true)}
          disabled={posting}
        >
          Add Comment
        </Button>
      ) : (
        <>
          <div className={classes.editor}>
            <TextEditor
              onEditorStateChange={onEditorStateChange}
              editorState={editorState}
              uploadCallback={uploadCallback}
              placeholder={placeholder}
              disabled={posting}
            />
          </div>

          {posting ? (
            <Spinner />
          ) : (
            <Button
              className={classes.commentButton}
              size="large"
              disabled={!editorState.getCurrentContent().hasText()}
              onClick={() => {
                addComment();
              }}
            >
              Comment
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default CommentForm;
