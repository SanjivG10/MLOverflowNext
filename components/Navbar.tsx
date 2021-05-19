import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
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
  searchBar: {
    flexGrow: 1,
    marginLeft: "6%",
    marginRight: "6%",
    position: "relative",
  },
  search: {
    background: "#fff",
    height: 40,
    width: "100%",
    borderRadius: 10,
    textAlign: "center",
    "&:focus": {
      outline: "none",
    },
  },
  searchIcon: {
    position: "absolute",
    height: 20,
    width: 20,
    right: 15,
    top: 10,
    "&:hover": {
      transform: "scale(1.2,1.2)",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const router = useRouter();

  const [search, setSearch] = useState("");

  const responseGoogle = async (response: GoogleLoginResponse) => {
    const { accessToken, profileObj } = response;

    const login = "auth/google/";
    let imageUrl;

    imageUrl = profileObj.imageUrl;

    if (!imageUrl) {
      imageUrl = "custom";
    }
  };

  const failGoogle = (error) => {};

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
          <div className={classes.searchBar}>
            <input
              placeholder="Search"
              className={classes.search}
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            />
            <img
              src="/search.svg"
              className={classes.searchIcon}
              onClick={() => {
                if (search) router.push("/search?key=" + search);
              }}
            />
          </div>
          <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_ID || ""}
            onSuccess={responseGoogle}
            onFailure={failGoogle}
            buttonText="Login"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
