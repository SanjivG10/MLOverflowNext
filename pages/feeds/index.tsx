import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FeedForm from "../../components/Forms/FeedForm";
import Header from "../../components/Header";
import FeedList from "./../../components/FeedList";
import Container from "@material-ui/core/Container";
import { Filter } from "../../components/Filter";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { FEED_URL } from "../../hooks/constants";
import { getAuthHeadersFromCookie } from "../../hooks/requests";
import { useCookies } from "react-cookie";
import { GetServerSidePropsContext } from "next";
import { IFeed } from "../../components/Feed";

const useStyles = makeStyles((theme) => ({
  postList: {
    flexGrow: 1,
  },
}));

export interface IFeedsList {
  results: IFeed[];
  links: {
    first: string;
    last: string;
    next: null | string;
    prev: null | string;
  };
  meta: {
    pagination: {
      page: number;
      pages: number;
      count: number;
    };
  };
}

const FeedPage = ({ feeds, err }: { feeds: IFeedsList; err: AxiosError }) => {
  const classes = useStyles();
  const router = useRouter();

  const [data, setData] = useState<IFeedsList>(feeds);
  const [error, setError] = useState<AxiosError>(err);

  const successSubmit = (feed: IFeed) => {
    const newData = { ...data };
    newData.results = [feed, ...data.results];
    setData(newData);
  };

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

  const setFilter = (filter?: string) => {
    const { vote, bookmark } = router.query;

    let queryString = vote ? "&vote=true" : "";
    queryString += bookmark ? "&bookmark=true" : "";
    const { pathname } = window.location;
    if (!vote && filter === "vote up") {
      queryString += "&vote=true";
    }
    if (!bookmark && filter === "bookmarked") {
      queryString += "&bookmark=true";
    }
    router.push({ pathname: pathname, query: queryString });
  };

  return (
    <div>
      <Header title="Feeds" />
      <FeedForm successSubmit={successSubmit} />
      <div className={classes.postList}>
        <Container>
          <Filter filters={filters} />
          <FeedList originalFeed={true} data={data.results} />
        </Container>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let feeds = {};
  let error = {};

  try {
    const { data } = await axios.get(FEED_URL, getAuthHeadersFromCookie(ctx));
    feeds = data;
  } catch (err) {
    error = err;
  }

  return {
    props: {
      feeds,
      error,
    },
  };
}

export default FeedPage;
