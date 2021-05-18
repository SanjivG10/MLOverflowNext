import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FeedForm from "../../components/Forms/FeedForm";
import Header from "../../components/Header";
import FeedList from "./../../components/FeedList";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  postList: {
    flexGrow: 1,
  },
}));

const FeedPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Header title="Feeds" />
      <FeedForm />
      <div className={classes.postList}>
        <Container>
          <FeedList originalFeed={true} />
        </Container>
      </div>
    </div>
  );
};

export default FeedPage;
