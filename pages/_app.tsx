import React, { useEffect, createContext, useReducer } from "react";
import Navbar from "../components/Navbar";
import "./../styles/global.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { userReducer } from "../reducers/userReducer";
import theme from "./../theme";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Modal from "../components/Modal";
import Button from "@material-ui/core/Button";
import { SLOGAN, SLOGAN_DESC } from "../constants";
import { HOME_URL } from "../hooks/constants";
import OpenGraphTags from "../components/OpenGraphTags";

type UserStateType = {
  show: boolean;
  loginStatus: boolean;
};

const initialUserState = {
  show: false,
  loginStatus: false,
};

export const UserContext = createContext<{
  state: UserStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialUserState, dispatch: () => null });

function MyComponent({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const toggleModal = (show: boolean) =>
    dispatch({ type: "toggleModal", payload: show });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ state, dispatch }}>
          <Modal show={state.show} setShow={toggleModal}>
            <div>You are not logged in</div>
          </Modal>

          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
        </UserContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyComponent;
