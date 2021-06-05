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
import { GetServerSideProps } from "next";
import { IFeed } from "../../components/Feed";
import { getFilterURL, getNewQuery, isEmpty } from "../../helper";

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

  const onClick = (filter?: string) => {
    if (filter) {
      const filterQuery = getFilterURL(filter);
      const newQueries = getNewQuery(router.query, filterQuery);
      let queries = "";

      for (const query in newQueries) {
        queries += "&" + query + "=" + newQueries[query];
      }
      router.push({ pathname: window.location.pathname, query: queries });
      setFilter(queries, filter);
    }
  };

  const voteFilterOptions = [
    {
      name: "vote up",
      icon: "/up.svg",
      onClick: onClick,
    },
  ];

  const bookmarkOptions = [
    {
      name: "bookmarked",
      icon: "/bookmark.svg",
      onClick: onClick,
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

  const setFilter = (queries: string, filter?: string) => {
    if (!filter) {
      return;
    }

    const getFilterData = async () => {
      const URL = FEED_URL + "?" + queries;
      const [data] = await useGet(URL);
      if (!isEmpty(data)) {
        setData(data);
      }
    };

    getFilterData();
  };

  return (
    <div>
      <Header title="Feeds" />
      <FeedForm successSubmit={successSubmit} />
      <div className={classes.postList}>
        <Container>
          <Filter filters={filters} />
          <FeedList originalFeed={true} data={data} />
        </Container>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let _data = {};
  try {
    const { vote, bookmark } = context.query;
    const { data } = await axios.get(
      FEED_URL +
        `?vote=${vote ? vote : ""}&bookmark=${bookmark ? bookmark : ""}`,
      getAuthHeadersFromCookie(context)
    );
    _data = data;
  } catch (error) {}

  if (isEmpty(_data)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { feeds: _data },
  };
};

export default FeedPage;
