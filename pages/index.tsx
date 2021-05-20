import React, { useReducer, createContext } from "react";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Jumbotron from "./../components/Jumbotron";
import QuickLinks from "../components/QuickLinks";
import PaperList from "../components/PaperList";
import FeedsList from "../components/FeedList";
import { SLOGAN } from "../constants";
import { userReducer } from "../reducers/userReducer";
import Modal from "../components/Modal";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  homePageContainer: {
    margin: 10,
    padding: 10,
  },
  modalBody: {
    color: "#000",
    fontSize: 24,
  },
  label: {
    fontSize: 20,
  },
}));

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

const Index = () => {
  const classes = useStyles();

  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const toggleModal = (show: boolean) =>
    dispatch({ type: "toggleModal", payload: show });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Modal show={state.show} setShow={toggleModal}>
        <div className={classes.label}>You are not logged in</div>
      </Modal>

      <Button onClick={() => toggleModal(true)}>CLICK</Button>

      <div className={classes.homePageContainer}>
        <Header title={SLOGAN} />

        <Container>
          <Jumbotron />
          <FeedsList />
          <PaperList />
          <QuickLinks />
        </Container>
      </div>
    </UserContext.Provider>
  );
};

export default Index;
