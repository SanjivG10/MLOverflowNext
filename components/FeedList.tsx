import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Feed, { IFeed } from "./Feed";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

type FeedProps = {
  originalFeed?: boolean;
  data: any;
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
  })
);

export default function FeedList({ originalFeed, data }: FeedProps) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      {!originalFeed && (
        <Link href="/feeds">
          <h1 className={classes.mainLabel}>Feeds</h1>
        </Link>
      )}
      <Grid container className={classes.root}>
        {data.map((item: IFeed) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={item.id}>
              <div className={classes.feed} key={item.id}>
                <Feed {...item} key={item.id} />
              </div>
            </Grid>
          );
        })}
      </Grid>

      {!originalFeed && (
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
