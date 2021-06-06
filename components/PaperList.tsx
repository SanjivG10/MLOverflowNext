import React, { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Paper, { IPaper } from "./Paper";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid } from "@material-ui/core";
import { useGet } from "../hooks/requests";
import { isEmpty } from "../helper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      marginTop: 40,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    noPaper: {
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: 20,
      fontStyle: "italic",
    },
    mainLabel: {
      fontSize: 40,
      marginLeft: "auto",
      marginRight: "auto",
      width: "fit-content",
      "&:hover": {
        cursor: "pointer",
      },
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

export default function PapersList({
  original,
  data,
  home,
}: {
  original?: boolean;
  data: {
    results: IPaper[];
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
  };
  home?: boolean;
}) {
  const classes = useStyles();
  const router = useRouter();

  const [papers, setPapers] = useState(data);

  useEffect(() => {
    if (data) {
      setPapers(data);
    }
  }, [data]);

  const fetchMoreData = async () => {
    if (papers?.links?.next) {
      const [data] = await useGet(papers.links.next);
      if (!isEmpty(data)) {
        setPapers({
          ...data,
          results: [...papers.results, ...data.results],
        });
      }
    }
  };

  return (
    <>
      {!original && (
        <Link href="/papers">
          <h1 className={classes.mainLabel}>Papers</h1>
        </Link>
      )}

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <InfiniteScroll
          dataLength={papers?.results?.length || 0}
          next={fetchMoreData}
          hasMore={(!home && Boolean(papers?.links?.next)) || false}
          loader={<Spinner />}
        >
          <>
            {papers?.results?.length === 0 && (
              <div className={classes.noPaper}>no posts found</div>
            )}
            {papers?.results?.map((item: IPaper) => {
              return (
                <div
                  key={item.id}
                  onClick={() => router.push(`/papers/${item.slug}`)}
                >
                  <Paper {...item} />
                </div>
              );
            })}
          </>
        </InfiniteScroll>
      </List>

      {!original && papers?.results?.length > 0 && (
        <Link href="/papers">
          <div className={classes.moreButton}>
            <Button color="secondary" className={classes.seeMore}>
              SEE MORE
            </Button>
          </div>
        </Link>
      )}
    </>
  );
}
