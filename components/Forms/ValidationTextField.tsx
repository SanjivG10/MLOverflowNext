import React, { ClipboardEvent } from "react";
import { makeStyles, withStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    width: "100%",
    marginBottom: 20,
  },
}));

const ValidationTextFieldStyle = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "black",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important",
    },
  },
})(TextField);

interface IProps {
  disabled?: boolean;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  placeholder: string;
  error: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: { name: string } | string | Date;
  label: string;
  onPaste?: (e: ClipboardEvent) => void;
  multiline?: boolean;
  rows?: number;
  type?: string;
}

export default function ValidationTextField(props: IProps) {
  const classes = useStyles();
  const {
    disabled,
    onKeyPress,
    placeholder,
    error,
    onChange,
    value,
    label,
    onPaste,
    multiline,
    rows,
    type,
  } = props;

  return (
    <ValidationTextFieldStyle
      className={classes.input}
      label={label}
      disabled={disabled}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      variant="outlined"
      error={error}
      onChange={onChange}
      onPaste={onPaste}
      value={value || ""}
      multiline={multiline}
      rows={rows}
      type={type}
    />
  );
}
