import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FeedForm from "../../components/Forms/FeedForm";
import FeedList from "./../../components/FeedList";
import Container from "@material-ui/core/Container";
import { Filter } from "../../components/Filter";
import { useRouter } from "next/router";
import axios from "axios";
import { FEED_URL, HOME_URL, PUBLIC_MEDIA_URL } from "../../hooks/constants";
import { getAuthHeadersFromCookie, useGet } from "../../hooks/requests";
import { GetServerSideProps } from "next";
import { IFeed } from "../../components/Feed";
import { getFilterURL, getNewQuery, isEmpty } from "../../helper";
import { FEED_LIST_TITLE } from "../../constants";
import OpenGraphTags from "../../components/OpenGraphTags";

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

const FeedPage = ({ feeds, err }: { feeds: IFeedsList; err: any }) => {
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

  const oGprops = {
    title: FEED_LIST_TITLE,
    description: FEED_LIST_TITLE,
    ogTitle: FEED_LIST_TITLE,
    image: "/logo_white.png",
    url: HOME_URL + "feeds/",
  };

  return (
    <div>
      <OpenGraphTags {...oGprops} />
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
