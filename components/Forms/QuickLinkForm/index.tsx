import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Button, Theme } from "@material-ui/core";
import SlugField from "../SlugField";
import {
  HOME_URL_WITHOUT_SLASH,
  QUICKLINK_URL,
  UPLOAD_IMAGE_URL,
} from "../../../hooks/constants";
import { usePost, usePostForImage, usePut } from "../../../hooks/requests";
import Spinner from "../../Spinner";
import { IQuickLink } from "../../QuickLinkList";
import ValidationTextField from "../ValidationTextField";
import { ValidationFormAttrs } from "./constants";
import { isEmpty } from "../../../helper";
import { UserContext } from "../../../pages/_app";

interface IProps {
  successSubmit: (obj: any) => void;
  data?: IQuickLink;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: 600,
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
  inputImage: {
    margin: 10,
  },
  image: {
    maxWidth: 500,
    maxHeight: 500,
    borderRadius: 10,
    textAlign: "center",
    margin: 10,
  },
}));

const QuickLinkForm = ({ successSubmit, data }: IProps) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [slug, setSlug] = useState<string>("");
  const [slugError, setSlugError] = useState<boolean>(true);
  const [posting, setPosting] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [image, setImage] = useState<File | null | string>(null);
  const [link, setLink] = useState<string>("");

  const { state, dispatch } = useContext(UserContext);

  const [uploaded, setUploaded] = useState<string>("");

  useEffect(() => {
    if (data && data.id) {
      setName(data.name);
      setDesc(data.description);
      setLink(data.link);
      setSlug(data.slug);
      setSlugError(false);
      setUploaded(data.image);
    }
  }, [data]);

  const editQuickLink = async () => {
    setError("");
    setPosting(true);

    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    const [imageData, error] = await usePostForImage(
      UPLOAD_IMAGE_URL,
      formData,
      {
        "content-type": "multipart/form-data",
      }
    );

    if (!isEmpty(imageData)) {
      const image_link = HOME_URL_WITHOUT_SLASH + imageData.src;
      if (data && data.id) {
        const [quickLink, myerr] = await usePut(QUICKLINK_URL + `${data.id}/`, {
          slug,
          name,
          description: desc,
          image: image_link,
          link,
        });

        if (!isEmpty(quickLink)) {
          successSubmit(quickLink);
          setName("");
          setDesc("");
          setImage(null);
          setLink("");
          setSlug("");
          setError("");
          setSlugError(false);
        } else {
          setError(myerr);
        }
      }
    }

    setPosting(false);
  };

  const postQuickLink = async () => {
    setError("");
    setPosting(true);

    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    const [imageData, error] = await usePostForImage(
      UPLOAD_IMAGE_URL,
      formData,
      {
        "content-type": "multipart/form-data",
      }
    );

    if (!isEmpty(imageData)) {
      const image_link = HOME_URL_WITHOUT_SLASH + imageData.src;

      const [quickLink, myerr] = await usePost(QUICKLINK_URL, {
        slug,
        name,
        description: desc,
        image: image_link,
        link,
      });

      if (!isEmpty(quickLink)) {
        successSubmit(quickLink);
        setName("");
        setDesc("");
        setImage(null);
        setLink("");
        setSlug("");
        setError("");
        setSlugError(false);
      } else {
        setError(myerr);
      }
    }

    setPosting(false);
  };

  const submitQuickLink = async () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }

    setPosting(true);
    if (data && data.id) {
      editQuickLink();
    } else {
      postQuickLink();
    }
    setPosting(false);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setImage(null);
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const acceptedImageTypes = ["image/gif", "image/jpeg", "image/jpg"];
      if (acceptedImageTypes.includes(file["type"])) {
        setImage(file);
      } else {
        setError("Not a valid image");
      }
    }
  };

  return (
    <Container className={classes.root}>
      <Container className={classes.container}>
        <ValidationTextField
          label={ValidationFormAttrs.name.label}
          placeholder={ValidationFormAttrs.name.placeholder}
          error={name.length > ValidationFormAttrs.name.fieldLength}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const name = e.target.value;
            if (name.length <= ValidationFormAttrs.link.fieldLength) {
              setName(e.target.value);
              setError("");
            } else {
              setError(
                `${ValidationFormAttrs.name.fieldName} cannot be more than ${ValidationFormAttrs.name.fieldLength} characters`
              );
            }
          }}
          value={name}
        />

        <ValidationTextField
          label={ValidationFormAttrs.link.label}
          placeholder={ValidationFormAttrs.link.placeholder}
          error={link.length > ValidationFormAttrs.link.fieldLength}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const link = e.target.value;
            if (link.length <= ValidationFormAttrs.link.fieldLength) {
              setLink(e.target.value);
              setError("");
            } else {
              setError(
                `${ValidationFormAttrs.link.fieldName} cannot be more than ${ValidationFormAttrs.link.fieldLength} characters`
              );
            }
          }}
          value={link}
        />

        <ValidationTextField
          label={ValidationFormAttrs.description.label}
          multiline
          rows={3}
          placeholder={ValidationFormAttrs.description.placeholder}
          error={false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDesc(e.target.value);
          }}
          value={desc}
        />

        <input
          type="file"
          accept="image/jpg, image/gif, image/jpeg"
          onChange={onFileChange}
          className={classes.inputImage}
        />

        {image && (
          <img
            src={URL.createObjectURL(image) || ""}
            className={classes.image}
          />
        )}

        {uploaded && !image && <img src={uploaded} className={classes.image} />}

        <SlugField
          placeholder={ValidationFormAttrs.slug.placeholder}
          data={slug}
          setData={setSlug}
          tip={ValidationFormAttrs.slug.tip}
          error={slugError}
          setError={setSlugError}
          disabled={posting}
          link="/quicklinks"
        />

        {posting ? (
          <Spinner />
        ) : (
          <Button
            className={classes.postButton}
            color="primary"
            disabled={!(image || uploaded) || !link || !name || !desc || !slug}
            onClick={submitQuickLink}
          >
            {data && data.id ? "Edit" : "POST"}
          </Button>
        )}
      </Container>

      {error && <div className={classes.error}>{error}</div>}
    </Container>
  );
};

export default QuickLinkForm;
