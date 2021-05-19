import React, { useState } from "react";

import draftToHtml from "draftjs-to-html";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { EditorState, convertToRaw } from "draft-js";
import TextEditor from "../TextEditor";
import { Button } from "@material-ui/core";
import { placeholder } from "./constants";

interface IImage {
  file: File;
  localSrc: string;
}

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

const CommentForm = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [uploadedImages, setUploadedImages] = useState<IImage[]>([]);
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();

  function uploadCallback(file: File) {
    return new Promise((resolve, reject) => {
      const imageObject = {
        file,
        localSrc: URL.createObjectURL(file),
      };

      const images = [...uploadedImages, imageObject];
      setUploadedImages(images);
      resolve({ data: { link: imageObject.localSrc } });
    });
  }

  const onEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState);
    const rawState = convertToRaw(newEditorState.getCurrentContent());
    const html = draftToHtml(rawState);
  };

  return (
    <div className={classes.container}>
      {!clicked ? (
        <Button
          className={classes.button}
          color="secondary"
          onClick={() => setClicked(true)}
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
            />
          </div>

          <Button className={classes.commentButton} size="large">
            Comment
          </Button>
        </>
      )}
    </div>
  );
};

export default CommentForm;
