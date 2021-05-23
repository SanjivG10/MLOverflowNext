import React, { useReducer, createContext } from "react";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Jumbotron from "./../components/Jumbotron";
import QuickLinks from "../components/QuickLinks";
import PaperList from "../components/PaperList";
import FeedsList from "../components/FeedList";
import { SLOGAN, ENDPOINTS } from "../constants";
import { userReducer } from "../reducers/userReducer";
import Modal from "../components/Modal";
import Button from "@material-ui/core/Button";
import { fetcher } from "./../hooks/requests";
import {
  FEED_AMOUNT_HOME_PAGE,
  PAPER_AMOUNT_HOME_PAGE,
  URL,
} from "../hooks/constants";

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

const Index = ({ feeds, papers, quote, tags }) => {
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
          <Jumbotron quote={quote} tags={tags} />
          <FeedsList data={feeds} />
          <PaperList data={papers} />
          <QuickLinks />
        </Container>
      </div>
    </UserContext.Provider>
  );
};

export async function getStaticProps() {
  const FEED_URL = "feeds/?home=true&size=" + FEED_AMOUNT_HOME_PAGE;
  const PAPER_URL = "papers/?home=true&size=" + PAPER_AMOUNT_HOME_PAGE;
  const TAGS_URL = "tags/";

  let papers = [];
  let quote = "";
  let feeds = [];
  let tags = [];
  try {
    quote = await fetcher(URL + ENDPOINTS.QUOTE_ENDPOINT).then(
      (quoteResponse) => quoteResponse.quote
    );
    feeds = await fetcher(URL + FEED_URL).then(
      (feedResponse) => feedResponse.results
    );
    papers = await fetcher(URL + PAPER_URL).then(
      (paperResponse) => paperResponse.results
    );
    tags = await fetcher(URL + TAGS_URL).then((tagsResult) => tagsResult);
  } catch (error) {
    console.log(error);
  }

  return { props: { quote, papers, feeds, tags } };
}

export default Index;
