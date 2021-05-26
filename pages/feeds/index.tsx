import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FeedForm from "../../components/Forms/FeedForm";
import Header from "../../components/Header";
import FeedList from "./../../components/FeedList";
import Container from "@material-ui/core/Container";
import { Filter } from "../../components/Filter";
import { useRouter } from "next/router";
import axios from "axios";
import { FEED_URL } from "../../hooks/constants";
import { getAuthHeadersFromCookie, useGet } from "../../hooks/requests";
import { useCookies } from "react-cookie";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
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

const FeedPage = ({ feeds, err }: { feeds: IFeedsList }) => {
  const classes = useStyles();
  const router = useRouter();

  const [data, setData] = useState<IFeedsList>(feeds);

  const successSubmit = (feed: IFeed) => {
    const newData = { ...data, results: [feed, ...data.results] };
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

    const getFilterData = async () => {
      const URL = FEED_URL + "?" + queryString;
      const [data, error] = await useGet(URL);
      setData(data);
    };
    getFilterData();

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get(FEED_URL, getAuthHeadersFromCookie(context));

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { feeds: data },
  };
};

export default FeedPage;
