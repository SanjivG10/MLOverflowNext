import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import PapersList from "../../components/PaperList";
import FeedList from "../../components/FeedList";
import { Container } from "@material-ui/core";
import { useRouter } from "next/router";
import { fetcher } from "../../hooks/requests";
import { FEED_URL, PAPER_URL, QUICKLINK_URL } from "../../hooks/constants";
import { GetServerSideProps } from "next";
import QuickLinks from "../../components/QuickLinks";

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
}));

const Profile = ({ papers, feeds, quickLinks }) => {
  const classes = useStyles();
  const { query } = useRouter();
  const { key } = query;

  return key ? (
    <div className={classes.container}>
      <Header title={key + " results"} />
      <div className={classes.bookmarkContainer}></div>
      <Container>
        <div className={classes.paperContainer}>
          <PapersList original data={papers} />
        </div>
        <div className={classes.feedContainer}>
          <FeedList home originalFeed data={feeds} />
        </div>

        <div className={classes.quickLinkContainer}>
          <QuickLinks original data={quickLinks} />
        </div>
      </Container>
    </div>
  ) : (
    <div className={classes.nothing}>
      <Header title="No results found" />
      <h3>No search key specified</h3>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let papers = {};
  let feeds = {};
  let quickLinks = {};

  const { key } = ctx.query;

  const FEED_SEARCH_URL = FEED_URL + `?search=${key}`;
  const PAPER_SEARCH_URL = PAPER_URL + `?search=${key}`;
  const QUICKLINK_SEARCH_URL = QUICKLINK_URL + `?search=${key}`;

  try {
    feeds = await fetcher(FEED_SEARCH_URL);
    papers = await fetcher(PAPER_SEARCH_URL);
    quickLinks = await fetcher(QUICKLINK_SEARCH_URL);
  } catch (error) {}

  return { props: { papers, feeds, quickLinks } };
};

export default Profile;
