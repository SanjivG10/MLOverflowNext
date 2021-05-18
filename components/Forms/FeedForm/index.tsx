import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { EditorState, convertToRaw } from "draft-js";
import { tagPlaceHolder, placeholder } from "./constants";
import Container from "@material-ui/core/Container";
import { Button, Theme } from "@material-ui/core";
import draftToHtml from "draftjs-to-html";
import TagForm from "../TagForm";
import { ITag } from "../TagForm";
import TextEditor from "./../TextEditor";

interface IImage {
  file: File;
  localSrc: string;
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

const FeedForm = () => {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [error, setError] = useState("");
  const [uploadedImages, setUploadedImages] = useState<IImage[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const rawState = convertToRaw(newEditorState.getCurrentContent());
    const html = draftToHtml(rawState);
  };

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

  return (
    <Container className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.editorContainer}>
          <TextEditor
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
        />

        <Button
          className={classes.postButton}
          color="primary"
          disabled={
            !editorState.getCurrentContent().hasText() || tags?.length === 0
          }
        >
          POST
        </Button>
      </Container>

      {error && <div className={classes.error}>{error}</div>}
    </Container>
  );
};

export default FeedForm;
