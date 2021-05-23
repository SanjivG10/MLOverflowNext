import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Spinner() {
  return (
    <div className="spinnerContainer">
      <CircularProgress className="spinner" color="secondary" />
    </div>
  );
}
