import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface IProps {
  show: boolean;
  children: React.ReactElement;
  setShow: (arg: boolean) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      background: "#fff",
      color: "#000",
    },
    modalBody: {
      color: "#000",
      background: "#fff",
      padding: 10,
      margin: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      outline: "none !important",
      borderRadius: 4,
    },
  })
);

const MyModal = (props: IProps) => {
  const { show, children, setShow } = props;
  const classes = useStyles();

  useEffect(() => {
    setValid(true);
  }, []);

  const [isBrowser, setValid] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return isBrowser ? (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      className={classes.main}
      open={show}
      onClose={handleClose}
    >
      <div className={classes.modalBody}>
        {children}
        <Button
          color="primary"
          variant="outlined"
          onClick={() => handleClose()}
        >
          Close
        </Button>
      </div>
    </Modal>
  ) : null;
};

export default MyModal;
