import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { HOME_URL } from "../../hooks/constants";

interface IProps {
  placeholder: string;
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  tip: string;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    minWidth: 200,
    padding: 10,
    borderRadius: 4,
    height: 40,
    border: "none",
    outline: `2px solid ${theme.palette.secondary.main}`,
  },
  error: {
    outline: "2px solid red",
  },
}));

const SlugField = (props: IProps) => {
  const classes = useStyles();

  const { placeholder, data, setData, tip, error, setError, disabled } = props;
  const [tooltip, setToolTip] = useState(tip);

  return (
    <>
      <Tooltip title={error || data === "" ? tip : tooltip}>
        <input
          className={`${classes.input} ${error ? classes.error : ""}`}
          placeholder={placeholder}
          value={data}
          disabled={disabled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/gim;
            const value = e.target.value.toLowerCase();
            setData(value);
            setToolTip(HOME_URL + "feeds/" + value);
            if (!slugRegex.test(value)) {
              setError(true);
            } else {
              setError(false);
            }
          }}
        />
      </Tooltip>
    </>
  );
};

export default SlugField;
