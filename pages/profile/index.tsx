import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import PapersList from "../../components/PaperList";
import FeedList from "../../components/FeedList";
import { Container } from "@material-ui/core";

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
}));

interface IProps {}

const Profile = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header title={"Profile"} />
      <div className={classes.bookmarkContainer}></div>
      <div className={classes.label}>Your Contributions to MLOverflow</div>
      <Container>
        <PapersList original />
        <FeedList originalFeed />
      </Container>
    </div>
  );
};

export default Profile;
