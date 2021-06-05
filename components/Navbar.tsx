import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { useRouter } from "next/router";
import { UserContext } from "./../pages/_app";
import {
  USER_IMAGE_LOCAL_STORAGE,
  USER_TOKEN_LOCAL_STORAGE,
} from "../constants";
import { usePost } from "../hooks/requests";
import { LOGIN_URL } from "../hooks/constants";
import { isEmpty } from "../helper";
import Cookies from "universal-cookie";

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
  userImage: {
    borderRadius: "50%",
    width: 40,
    height: 40,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const { state, dispatch } = useContext(UserContext);
  const [img, setImg] = useState("");
  const cookies = new Cookies();

  useEffect(() => {
    const token_local = localStorage.getItem(USER_TOKEN_LOCAL_STORAGE);
    const token_cookie = cookies.get(USER_TOKEN_LOCAL_STORAGE);
    const avatar = localStorage.getItem(USER_IMAGE_LOCAL_STORAGE);

    if (token_local && avatar && token_cookie) {
      dispatch({
        type: "loggedIn",
        payload: { token: token_local, img: avatar },
      });
      setImg(avatar);
    } else {
      dispatch({ type: "loggedOut" });
      cookies.remove(USER_TOKEN_LOCAL_STORAGE);
    }
  }, [state.loginStatus]);

  const responseGoogle = async (response: GoogleLoginResponse) => {
    const { accessToken, profileObj } = response;

    let user_img = "";

    user_img = profileObj.imageUrl;

    if (!user_img) {
      user_img = "/user.svg";
    }

    const [data, error] = await usePost(
      LOGIN_URL,
      {
        access_token: accessToken,
      },
      false
    );

    if (!isEmpty(data)) {
      dispatch({
        type: "loggedIn",
        payload: { token: data.key, img: user_img },
      });
      cookies.set(USER_TOKEN_LOCAL_STORAGE, data.key);
    }
  };

  const failGoogle = () => {
    dispatch({ type: "loggedOut" });
  };

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
          {state.loginStatus ? (
            <>
              <img
                src={img}
                alt=""
                className={classes.userImage}
                onClick={() => {
                  router.push("/profile");
                }}
              />
            </>
          ) : (
            <GoogleLogin
              clientId={process.env.NEXT_PUBLIC_GOOGLE_ID || ""}
              onSuccess={responseGoogle}
              onFailure={failGoogle}
              buttonText="Login"
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
