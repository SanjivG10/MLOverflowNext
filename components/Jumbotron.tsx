import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { MAIN_LABEL_HOME_PAGE } from "../constants";
import Link from "next/link";
import { Button } from "@material-ui/core";

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
}));

const Jumbotron = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={3} className={classes.pageIntro}>
        <div className={classes.mainText}>
          <div className={classes.mainLabel}>
            ML<span className={classes.appendText}>Overflow</span>
          </div>

          <img src="logo.png" width={80} height={80} />
          <div className={classes.secLabel}>{MAIN_LABEL_HOME_PAGE}</div>
          <div className={classes.quote}>
            sometimes it is the very people who noone imagines anything of{" "}
          </div>
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
