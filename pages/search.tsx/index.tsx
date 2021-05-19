import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import PapersList from "../../components/PaperList";
import FeedList from "../../components/FeedList";
import { Container } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 10,
    padding: 10,
  },
  label: {
    fontSize: 24,
    borderBottom: "1px solid teal",
    width: "fit-content",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  bookmarkContainer: {},
  nothing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

interface IProps {}

const Profile = (props: IProps) => {
  const classes = useStyles();
  const { query } = useRouter();
  const { key } = query;

  return key ? (
    <div className={classes.container}>
      <Header title={key + " results"} />
      <div className={classes.bookmarkContainer}></div>
      <Container>
        <PapersList original />
        <FeedList originalFeed />
      </Container>
    </div>
  ) : (
    <div className={classes.nothing}>
      <Header title="No results found" />
      <h3>No search specified</h3>
    </div>
  );
};

export default Profile;
