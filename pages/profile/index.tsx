import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import PapersList from "../../components/PaperList";
import FeedList from "../../components/FeedList";
import { Container } from "@material-ui/core";
import { useRouter } from "next/router";
import { useGet } from "../../hooks/requests";
import { FEED_URL, PAPER_URL, QUICKLINK_URL } from "../../hooks/constants";
import QuickLinks from "../../components/QuickLinks";
import { UserContext } from "../_app";
import Button from "@material-ui/core/Button";

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
  paperContainer: {},
  feedContainer: {},
  quickLinkContainer: {},
  logoutButton: {
    marginLeft: 10,
  },
}));

const Profile = ({}) => {
  const classes = useStyles();

  const [feeds, setFeeds] = useState<any>();
  const [papers, setPapers] = useState<any>();
  const [quickLinks, setQuickLinks] = useState<any>();

  const { state, dispatch } = useContext(UserContext);
  const { push } = useRouter();

  const getData = async () => {
    const FEED_SEARCH_URL = FEED_URL + `?user=me`;
    const PAPER_SEARCH_URL = PAPER_URL + `?user=me`;
    const QUICKLINK_SEARCH_URL = QUICKLINK_URL + `?user=me`;

    try {
      const [feedsData] = await useGet(FEED_SEARCH_URL);
      const [papersData] = await useGet(PAPER_SEARCH_URL);
      const [quickLinksData] = await useGet(QUICKLINK_SEARCH_URL);

      setFeeds(feedsData);
      setPapers(papersData);
      setQuickLinks(quickLinksData);
    } catch (error) {}
  };

  useEffect(() => {
    if (!state.loginStatus) {
      push("/");
    } else {
      getData();
    }
  }, []);

  const logOutUser = () => {
    dispatch({ type: "loggedOut" });
    push("/");
  };

  return (
    <div className={classes.container}>
      <Button
        color="primary"
        variant="outlined"
        className={classes.logoutButton}
        onClick={logOutUser}
      >
        {" "}
        LOG OUT{" "}
      </Button>
      <Header title=" Your contributions on MLOVERFLOW " />
      <div className={classes.bookmarkContainer}></div>
      <Container>
        <div className={classes.paperContainer}>
          <PapersList original data={papers} />
        </div>
        <div className={classes.feedContainer}>
          <FeedList originalFeed data={feeds} />
        </div>

        <div className={classes.quickLinkContainer}>
          <QuickLinks original data={quickLinks} />
        </div>
      </Container>
    </div>
  );
};

export default Profile;
