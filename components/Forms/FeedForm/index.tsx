import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { EditorState, convertToRaw } from "draft-js";
import Container from "@material-ui/core/Container";
import { Button, Theme } from "@material-ui/core";
import draftToHtml from "draftjs-to-html";
import TagForm from "../TagForm";
import { ITag } from "../TagForm";
import TextEditor from "./../TextEditor";
import SlugField from "../SlugField";
import axios from "axios";
import { FEED_URL, HOME_URL_WITHOUT_SLASH } from "../../../hooks/constants";
import { getAuthHeaders, handleAxiosError } from "../../../hooks/requests";
import {
  tagPlaceHolder,
  placeholder,
  slug_placeholder,
  slug_tip,
} from "./constants";
import Spinner from "../../Spinner";

interface IProps {
  successSubmit: (obj: any) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: 600,
  },
  editorContainer: {
    border: "1px solid #696969",
  },
  root: {
    marginTop: 40,
    marginBottom: 40,
  },
  postButton: {
    marginLeft: 10,
    background: theme.palette.secondary.main,
    color: "#fff",
    "&:hover": {
      color: "#fff",
      background: theme.palette.secondary.dark,
    },
    "&:disabled": {
      color: "#8f8f8f",
      background: theme.palette.secondary.dark,
    },
  },
  postList: {},
  error: {
    color: "red",
    textAlign: "center",
  },
  uploadedImage: {
    width: 500,
    height: 500,
  },
  tagAndButton: {
    maxWidth: 500,
  },
}));

const TAGS_LENGTH = 5;

const FeedForm = ({ successSubmit }: IProps) => {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [error, setError] = useState("");
  const [tags, setTags] = useState<ITag[]>([]);
  const [slug, setSlug] = useState<string>("");
  const [slugError, setSlugError] = useState<boolean>(true);
  const [posting, setPosting] = useState<boolean>(false);
  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  function uploadCallback(file: File) {
    return new Promise(async (resolve, reject) => {
      const imageObject = {
        file,
        localSrc: URL.createObjectURL(file),
      };

      const upload = async (file) => {
        let formData = new FormData();
        formData.append("image", file);

        try {
          const { data } = await axios.post(
            "http://localhost:8000/api/v1/upload/",
            formData,
            {
              headers: {
                "content-type": "multipart/form-data",
                authorization: "Token 899608723b13c4ef178337e01a19b7f257ea6093",
              },
            }
          );

          resolve({ data: { link: HOME_URL_WITHOUT_SLASH + data.src } });
        } catch (error) {}
      };

      await upload(file);
    });
  }

  const submitFeed = async () => {
    setPosting(true);
    const rawState = convertToRaw(editorState.getCurrentContent());
    const text = draftToHtml(rawState);

    try {
      const { data } = await axios.post(
        FEED_URL,
        {
          text,
          slug,
          tags,
        },
        getAuthHeaders()
      );
      successSubmit(data);
      setTags([]);
      setSlug("");
      setError("");
      setSlugError(false);
      setEditorState(EditorState.createEmpty());
    } catch (e) {
      const err = handleAxiosError(e);
      setError(err);
    }
    setPosting(false);
  };

  return (
    <Container className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.editorContainer}>
          <TextEditor
            disabled={posting}
            editorState={editorState}
            placeholder={placeholder}
            onEditorStateChange={onEditorStateChange}
            uploadCallback={uploadCallback}
          />
        </div>

        <TagForm
          setTags={setTags}
          placeholder={tagPlaceHolder}
          length={100}
          maxNumber={TAGS_LENGTH}
          setError={setError}
          tags={tags}
          label="tag"
          disabled={posting}
        />

        <SlugField
          placeholder={slug_placeholder}
          data={slug}
          setData={setSlug}
          tip={slug_tip}
          error={slugError}
          setError={setSlugError}
          disabled={posting}
        />

        {posting ? (
          <Spinner />
        ) : (
          <Button
            className={classes.postButton}
            color="primary"
            disabled={!editorState.getCurrentContent().hasText() || slugError}
            onClick={submitFeed}
          >
            POST
          </Button>
        )}
      </Container>

      {error && <div className={classes.error}>{error}</div>}
    </Container>
  );
};

export default FeedForm;
