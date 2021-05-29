import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { IQuickLink } from "./QuickLinkList";
import { Container } from "@material-ui/core";
import { textLimit } from "../helper";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      padding: 10,
      margin: 10,
      width: 500,
      textAlign: "center",
      border: "2px solid #faf8f9",
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

  const { name, description, image, link, slug } = props;

  const handleClick = () => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Link href={"/quicklinks/" + slug}>
      <Container className={classes.container}>
        <div className={classes.title}>{name || ""}</div>
        <a
          className={classes.link}
          href={link}
          target="_blank"
          onClick={handleClick}
        >
          {link || ""}
        </a>
        <img src={image} className={classes.image} alt="" />
        <Container className={`${classes.desc}  removeScrollBar`}>
          {textLimit(description, 100) || ""}
        </Container>
      </Container>
    </Link>
  );
};

export default QuickLink;
