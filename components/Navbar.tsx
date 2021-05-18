import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer",
    },
  },
  appBar: {
    background: "black",
    color: "white",
  },
  myLogo: {
    marginTop: 16,
    "&:hover": {
      transform: "scale(1.2,1.2)",
    },
    marginRight: 8,
  },
  logoContainer: {
    display: "flex",
    alignContent: "center",
  },
  appendText: {
    color: "#bfbfbf",
  },
  loginButton: {
    color: "#000",
    background: "#fff",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link href="/">
            <Typography variant="h6" className={classes.title}>
              <div className={classes.logoContainer}>
                <img
                  src="/logo_white.png"
                  width={40}
                  height={40}
                  className={classes.myLogo}
                />
                <p>
                  ML<span className={classes.appendText}>Overflow</span>
                </p>
              </div>
            </Typography>
          </Link>
          <Button className={classes.loginButton}>login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
