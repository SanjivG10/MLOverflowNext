import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FeedForm from "../../components/Forms/FeedForm";
import Header from "../../components/Header";
import FeedList from "./../../components/FeedList";
import Container from "@material-ui/core/Container";
import { Filter } from "../../components/Filter";

const useStyles = makeStyles((theme) => ({
  postList: {
    flexGrow: 1,
  },
}));

const FeedPage = () => {
  const classes = useStyles();

  const voteFilterOptions = [
    {
      name: "vote up",
      icon: "/up.svg",
      onClick: (filter?: string) => {
        setFilter(filter);
      },
    },
  ];

  const bookmarkOptions = [
    {
      name: "bookmarked",
      icon: "/bookmark.svg",
      onClick: (filter?: string) => {
        setFilter(filter);
      },
    },
  ];

  const filters = [
    {
      icon: "/up.svg",
      name: "VOTE",
      options: voteFilterOptions,
    },
    {
      icon: "/bookmark.svg",
      name: "BOOKMARK",
      options: bookmarkOptions,
    },
  ];

  const setFilter = (filter?: string) => {};

  return (
    <div>
      <Header title="Feeds" />
      <FeedForm />
      <div className={classes.postList}>
        <Container>
          <Filter filters={filters} />
          <FeedList originalFeed={true} />
        </Container>
      </div>
    </div>
  );
};

export default FeedPage;
