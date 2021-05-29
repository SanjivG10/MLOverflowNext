import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { MAIN_LABEL_HOME_PAGE } from "../constants";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  homePageContainer: {
    margin: 10,
    padding: 10,
  },
  pageIntro: {
    padding: 10,
    minHeight: 400,
    borderRadius: 20,
  },
  mainText: {
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  mainLabel: {
    fontSize: 60,
  },
  secLabel: {
    fontSize: 40,
  },
  appendText: {
    color: "#bfbfbf",
  },
  quote: {
    fontStyle: "italic",
    marginTop: 20,
  },
  testText: {
    height: 40,
  },
  reportAndPolicyButtonsGroup: {
    display: "flex",
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    background: "#000",
    color: "#fff",
    margin: 10,
    "&:hover": {
      color: "#000",
      background: "#fff",
    },
  },

  tagContainer: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 2,
    overflowWrap: "break-word",
  },
  tag: {
    marginLeft: 10,
    marginTop: 6,
    background: "#800000",
    width: "fit-content",
    marginBottom: 2,
    color: "white",
    padding: 4,
    lineHeight: "100%",
    display: "flex",
    alignItems: "center",
    borderRadius: 4,
    "&:hover": {
      background: "#000",
      color: "#fff",
      cursor: "pointer",
    },
    overflowWrap: "break-word",
  },
}));

const Jumbotron = ({
  quote,
  tags,
}: {
  quote: string;
  tags: { name: string }[];
}) => {
  const classes = useStyles();

  const router = useRouter();

  const renderTags = (myTags: { name: string }[]) => {
    return (
      <div className={classes.tagContainer}>
        {myTags?.map((tag) => {
          return (
            <div
              key={tag.name}
              className={classes.tag}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                router.push("/tag?key=" + tag.name);
              }}
            >
              {tag.name}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Paper elevation={3} className={classes.pageIntro}>
        <div className={classes.mainText}>
          <div className={classes.quote}>{quote}</div>
          <div className={classes.mainLabel}>
            ML<span className={classes.appendText}>Overflow</span>
          </div>

          <img src="logo.png" width={80} height={80} />
          <div className={classes.secLabel}>{MAIN_LABEL_HOME_PAGE}</div>
          {renderTags(tags)}
        </div>
        <div className={classes.reportAndPolicyButtonsGroup}>
          <Link href="/report">
            <Button className={classes.button}>Report problem</Button>
          </Link>

          <Link href="/privacy">
            <Button className={classes.button}>Privacy Policy</Button>
          </Link>
        </div>
      </Paper>
    </div>
  );
};

export default Jumbotron;
