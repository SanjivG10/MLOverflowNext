import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import Container from "@material-ui/core/Container";
import { Button, Theme } from "@material-ui/core";
import draftToHtml from "draftjs-to-html";
import TagForm from "../TagForm";
import { ITag } from "../TagForm";
import TextEditor from "./../TextEditor";
import SlugField from "../SlugField";
import {
  FEED_URL,
  HOME_URL_WITHOUT_SLASH,
  UPLOAD_IMAGE_URL,
} from "../../../hooks/constants";
import { usePost, usePostForImage, usePut } from "../../../hooks/requests";
import {
  tagPlaceHolder,
  placeholder,
  slug_placeholder,
  slug_tip,
} from "./constants";
import Spinner from "../../Spinner";
import { IFeed } from "../../Feed";
import { UserContext } from "./../../../pages/_app";
import linkifyHtml from "linkifyjs/html";

interface IProps {
  successSubmit: (obj: any) => void;
  data?: IFeed;
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

const FeedForm = ({ successSubmit, data }: IProps) => {
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

  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    if (data && data.id) {
      if (data.tags) {
        setTags(data.tags);
      }
      setSlug(data.slug);
      setSlugError(false);

      const html = data.text;
      const blocksFromHTML = convertFromHTML(html);
      const newEditorState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(newEditorState));
      // setEditorState()
    }
  }, [data]);

  function uploadCallback(file: File) {
    return new Promise(async (resolve, reject) => {
      if (!state.loginStatus) {
        dispatch({ type: "toggleModal", show: true });
        reject("error");
      } else {
        const upload = async (file: File) => {
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
          } else {
            reject("error");
          }
        };

        await upload(file);
      }
    });
  }

  const editFeed = async (text: string) => {
    if (data && data.id) {
      const [feed, myerr] = await usePut(FEED_URL + `${data.id}/`, {
        text,
        slug,
        tags,
      });
      if (feed.id) {
        successSubmit(feed);
      } else {
        setError(myerr);
      }
    }
  };

  const postFeed = async (text: string) => {
    const [feed, myerr] = await usePost(FEED_URL, { text, slug, tags });
    if (feed.id) {
      successSubmit(feed);
      setTags([]);
      setSlug("");
      setError("");
      setSlugError(false);
      setEditorState(EditorState.createEmpty());
    } else {
      setError(myerr);
    }
  };

  const submitFeed = async () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    setPosting(true);
    const rawState = convertToRaw(editorState.getCurrentContent());
    let text = draftToHtml(rawState);
    text = linkifyHtml(text, {
      target: {
        url: "_blank",
      },

      attributes: {
        rel: "noopener noreferrer",
      },
    });

    if (data && data.id) {
      editFeed(text);
    } else {
      postFeed(text);
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
          length={50}
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
            {data && data.id ? "Edit" : "POST"}
          </Button>
        )}
      </Container>

      {error && <div className={classes.error}>{error}</div>}
    </Container>
  );
};

export default FeedForm;
