import React, { useContext, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { IQuickLink } from "./QuickLinkList";
import { Container } from "@material-ui/core";
import { textLimit } from "../helper";
import Link from "next/link";
import { UserContext } from "../pages/_app";
import MyModal from "./Modal";
import QuickLinkForm from "./Forms/QuickLinkForm";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      border: "2px solid #faf8f9",
    },

    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: 500,
      padding: 4,
      textAlign: "center",
      borderRadius: 10,
      "&:hover": {
        cursor: "pointer",
      },
    },
    title: {
      fontWeight: "bold",
      fontSize: 28,
    },
    image: {
      width: 400,
      height: 400,
      borderRadius: 10,
      borderColor: "#faf8f9",
    },
    link: {
      textDecoration: "none",
      marginBottom: 20,
    },
    desc: {
      marginTop: 20,
      marginBottom: 20,
    },
  })
);

const QuickLink = (props: IQuickLink) => {
  const classes = useStyles();

  const { link, slug, fromList } = props;

  const { state, dispatch } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(props);

  const handleClick = () => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const editQuickLink = async () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }

    setOpen(true);
  };

  const onSuccessSubmit = (quickLink: IQuickLink) => {
    setData(quickLink);
    setOpen(false);
  };

  return (
    <>
      <div>
        <Container className={classes.main}>
          {data.isOwner && <Button onClick={editQuickLink}>Edit</Button>}
          <Link href={"/quicklinks/" + slug}>
            <Container className={classes.container}>
              <div className={classes.title}>{data.name || ""}</div>
              <a
                className={classes.link}
                href={link}
                target="_blank"
                onClick={handleClick}
              >
                {data.link || ""}
              </a>
              <img src={data.image} className={classes.image} alt="" />
              <Container className={`${classes.desc}  removeScrollBar`}>
                {fromList
                  ? textLimit(data.description, 100) || ""
                  : data.description}
              </Container>
            </Container>
          </Link>
        </Container>
      </div>

      <MyModal show={open} setShow={setOpen}>
        <QuickLinkForm data={data} successSubmit={onSuccessSubmit} />
      </MyModal>
    </>
  );
};

export default QuickLink;
