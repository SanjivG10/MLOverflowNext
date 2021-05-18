import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ValidationTextField from "./../ValidationTextField";
import { ValidationFormAttrs } from "./constants";
import DateTimePicker from "../DateTimePicker";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import moment, { Moment } from "moment";
import DropDown from "../DropDown";
import { CODE_OPTIONS } from "../constants";
import TagForm, { ITag } from "../TagForm";
import Button from "@material-ui/core/Button";
import {
  formValidator,
  formValidatorDate,
  formValidatorList,
} from "./../validator";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 500,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 20,
    },
    margin: {
      margin: theme.spacing(1),
    },
    error: {
      color: "red",
      textAlign: "center",
      marginTop: 10,
      marginBottom: 10,
    },
    postButton: {
      background: "teal",
      color: "#fff",
      "&:hover": {
        background: "#000",
      },
    },
  })
);

export default function PaperForm() {
  const classes = useStyles();
  const [title, setTitle] = useState<string>("");
  const [abstract, setAbstract] = useState<string>("");

  const [meta, setMeta] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const [model, setModel] = useState<string>("");
  const [dataset, setDataset] = useState<string>("");
  const [error, setError] = useState("");
  const [selectedDate, handleDateChange] = useState<Moment | null>(
    moment.utc()
  );
  const [codeType, setCodeType] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [authors, setAuthors] = useState<ITag[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);

  const AUTHOR_NUMBER = 20;
  const TAGS_NUMBER = 5;

  const validate = () => {
    let error = formValidator("title", title);
    if (error) {
      setError(error);
      return false;
    }
    error = formValidatorList("authors", authors);
    if (error) {
      setError(error);
      return false;
    }
    error = formValidatorDate("date", selectedDate);
    if (error) {
      setError(error);
      return false;
    }
    error = formValidator("abstract", abstract);
    if (error) {
      setError(error);
      return false;
    }
    error = formValidator("link", link);
    if (error) {
      setError(error);
      return false;
    }

    error = formValidatorList("tags", tags);
    if (error) {
      setError(error);
      return false;
    }
    return true;
  };

  const publishPaper = () => {
    const isValidated = validate();
  };

  return (
    <div className={classes.root}>
      <ValidationTextField
        label={ValidationFormAttrs.title.label}
        placeholder={ValidationFormAttrs.title.placeholder}
        error={title.length > ValidationFormAttrs.title.fieldLength}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const myTitle = e.target.value;
          if (myTitle.length <= ValidationFormAttrs.title.fieldLength) {
            setTitle(e.target.value);
            setError("");
          } else {
            setError(
              `${ValidationFormAttrs.title.fieldName} cannot be more than ${ValidationFormAttrs.title.fieldLength} characters`
            );
          }
        }}
        value={title}
      />

      <ValidationTextField
        label={ValidationFormAttrs.abstract.label}
        multiline
        rows={3}
        placeholder={ValidationFormAttrs.abstract.placeholder}
        error={title.length > ValidationFormAttrs.abstract.fieldLength}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const myAbstract = e.target.value;
          if (myAbstract.length <= ValidationFormAttrs.abstract.fieldLength) {
            setAbstract(e.target.value);
            setError("");
          } else {
            setError(
              `${ValidationFormAttrs.abstract.fieldName} cannot be more than ${ValidationFormAttrs.abstract.fieldLength} characters`
            );
          }
        }}
        value={abstract}
      />

      <DateTimePicker
        selectedDate={selectedDate}
        handleDateChange={(date: MaterialUiPickersDate) => {
          handleDateChange(date);
          if (date?.isAfter()) {
            setError("cannot set future date");
          } else {
            setError("");
          }
        }}
        label={ValidationFormAttrs.publishedDate.label}
      />

      <TagForm
        placeholder={ValidationFormAttrs.author.placeholder}
        length={100}
        label={ValidationFormAttrs.author.label}
        maxNumber={AUTHOR_NUMBER}
        tags={authors}
        setTags={setAuthors}
        triggerKey="Enter"
        setError={setError}
      />

      <ValidationTextField
        label={ValidationFormAttrs.meta.label}
        placeholder={ValidationFormAttrs.meta.placeholder}
        error={meta.length > ValidationFormAttrs.meta.fieldLength}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const meta = e.target.value;
          if (meta.length <= ValidationFormAttrs.link.fieldLength) {
            setMeta(e.target.value);
            setError("");
          } else {
            setError(
              `${ValidationFormAttrs.link.fieldName} cannot be more than ${ValidationFormAttrs.link.fieldLength} characters`
            );
          }
        }}
        value={meta}
      />

      <DropDown
        items={CODE_OPTIONS}
        selected={codeType}
        setSelected={setCodeType}
        label={"Code"}
      />
      {codeType && codeType !== "None" && (
        <ValidationTextField
          label={ValidationFormAttrs.code.label}
          placeholder={
            `${codeType !== "others" ? codeType + " " : ""}` +
            ValidationFormAttrs.code.placeholder
          }
          error={code.length > ValidationFormAttrs.code.fieldLength}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const code = e.target.value;
            if (code.length <= ValidationFormAttrs.code.fieldLength) {
              setCode(e.target.value);
              setError("");
            } else {
              setError(
                `${ValidationFormAttrs.code.fieldName} cannot be more than ${ValidationFormAttrs.code.fieldLength} characters`
              );
            }
          }}
          value={code}
        />
      )}

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
        label={ValidationFormAttrs.model.label}
        placeholder={ValidationFormAttrs.model.placeholder}
        error={model.length > ValidationFormAttrs.model.fieldLength}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const model = e.target.value;
          if (model.length <= ValidationFormAttrs.model.fieldLength) {
            setModel(e.target.value);
            setError("");
          } else {
            setError(
              `${ValidationFormAttrs.model.fieldName} cannot be more than ${ValidationFormAttrs.model.fieldLength} characters`
            );
          }
        }}
        value={model}
      />

      <ValidationTextField
        label={ValidationFormAttrs.datasets.label}
        placeholder={ValidationFormAttrs.datasets.placeholder}
        error={dataset.length > ValidationFormAttrs.datasets.fieldLength}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const datasets = e.target.value;
          if (datasets.length <= ValidationFormAttrs.datasets.fieldLength) {
            setDataset(e.target.value);
            setError("");
          } else {
            setError(
              `${ValidationFormAttrs.datasets.fieldName} cannot be more than ${ValidationFormAttrs.datasets.fieldLength} characters`
            );
          }
        }}
        value={dataset}
      />

      <TagForm
        placeholder={ValidationFormAttrs.tags.placeholder}
        length={100}
        label={ValidationFormAttrs.tags.label}
        maxNumber={TAGS_NUMBER}
        tags={tags}
        setTags={setTags}
        setError={setError}
      />

      <Button
        color="primary"
        className={classes.postButton}
        onClick={publishPaper}
      >
        Post
      </Button>

      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
}
