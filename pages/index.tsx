import React from "react";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Jumbotron from "./../components/Jumbotron";
import QuickLinks from "../components/QuickLinks";
import PaperList from "../components/PaperList";
import FeedsList from "../components/FeedList";
import { SLOGAN } from "../constants";

const useStyles = makeStyles((theme) => ({
  homePageContainer: {
    margin: 10,
    padding: 10,
  },
}));

const Index = () => {
  const classes = useStyles();

  return (
    <div className={classes.homePageContainer}>
      <Header title={SLOGAN} />

      <Container>
        <Jumbotron />
        <FeedsList />
        <PaperList />
        <QuickLinks />
      </Container>
    </div>
  );
};

export default Index;
