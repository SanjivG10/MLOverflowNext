import React from "react";
import { Button, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "bolder",
  },
  button: {
    marginTop: 10,
  },
  deleteButton: {
    background: theme.palette.error.dark,
    color: "#fff",
    "&:hover": {
      background: "#000",
    },
  },
}));

const DeleteForm: React.FC<{ title: string; onDelete: () => void }> = ({
  title,
  onDelete,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.label}>
        Are you sure want to delete this {title}?
      </div>

      <div className={classes.button}>
        <Button
          className={classes.deleteButton}
          variant="outlined"
          onClick={onDelete}
          size="large"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteForm;
