import React, { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Feed, { IFeed } from "./Feed";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import { IFeedsList } from "../pages/feeds";
import { useGet } from "../hooks/requests";
import { isEmpty } from "../helper";

type FeedProps = {
  originalFeed?: boolean;
  data: IFeedsList;
  home?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {},
    root: {
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: theme.palette.background.paper,
    },
    feed: { margin: 10 },

    mainLabel: {
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: 40,
      textAlign: "center",
      "&:hover": {
        cursor: "pointer",
      },
      width: "fit-content",
    },
    moreButton: {
      width: "fit-content",
      marginLeft: "auto",
      marginRight: "auto",
    },
    seeMore: {
      fontSize: 16,
    },
    noFeedLabel: {
      margin: 10,
      fontStyle: "italic",
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: 20,
      fontWeight: "bold",
    },
  })
);

export default function FeedList({ originalFeed, data, home }: FeedProps) {
  const classes = useStyles();

  const [feedsData, setFeedsData] = useState(data);

  useEffect(() => {
    if (data) {
      setFeedsData(data);
    }
  }, [data]);

  const updateOnDelete = (slug: string) => {
    const newFeedsData = feedsData.results.filter(
      (feed: IFeed) => feed.slug !== slug
    );
    setFeedsData({ ...feedsData, results: newFeedsData });
  };

  const editSuccessFeed = (feed: IFeed) => {
    let newFeedsData = { ...feedsData };
    for (let i = 0; i < newFeedsData.results.length; i++) {
      const oldFeed = newFeedsData.results[i];
      if (oldFeed.id === feed.id) {
        newFeedsData.results[i] = feed;
      }
    }
    setFeedsData(newFeedsData);
  };

  const fetchMoreData = async () => {
    if (feedsData?.links?.next) {
      const [data, error] = await useGet(feedsData.links.next);
      if (!isEmpty(data)) {
        setFeedsData({
          ...data,
          results: [...feedsData.results, ...data.results],
        });
      }
    }
  };

  return (
    <div className={classes.main}>
      {!originalFeed && (
        <Link href="/feeds">
          <h1 className={classes.mainLabel}>Feeds</h1>
        </Link>
      )}
      <InfiniteScroll
        dataLength={feedsData?.results?.length || 0}
        next={fetchMoreData}
        hasMore={(!home && Boolean(feedsData?.links?.next)) || false}
        loader={<Spinner />}
      >
        {" "}
        <Grid container className={classes.root}>
          {feedsData?.results?.length === 0 && (
            <div className={classes.noFeedLabel}>no posts found</div>
          )}
          {feedsData?.results?.map((item: IFeed) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={item.id}>
                <div className={classes.feed} key={item.id}>
                  <Feed
                    home={home}
                    {...item}
                    editSuccessFromList={editSuccessFeed}
                    key={item.id}
                    updateOnDelete={updateOnDelete}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>

      {!originalFeed && feedsData?.results?.length > 0 && (
        <Link href="/feeds">
          <div className={classes.moreButton}>
            <Button color="secondary" className={classes.seeMore}>
              SEE MORE
            </Button>
          </div>
        </Link>
      )}
    </div>
  );
}
