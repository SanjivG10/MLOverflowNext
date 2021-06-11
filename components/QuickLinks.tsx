import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { IQuickLink } from "./QuickLinkList";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import { useGet } from "../hooks/requests";
import { isEmpty } from "../helper";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  mainLabel: {
    marginLeft: 20,
    fontSize: 40,
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  eachLinkContainer: {
    textAlign: "center",
    "&:hover": {
      boxShadow: "2px 2px #F8F9FA",
      transform: "scale(1.05,1.05)",
    },
    marginTop: 20,
    marginRight: 20,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  noQuickLink: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20,
    fontStyle: "italic",
  },
}));

const QuickLinks = ({ data, original }: { data: any; original: boolean }) => {
  const classes = useStyles();

  const [quickLinks, setQuickLinks] = useState(data);

  useEffect(() => {
    if (data) {
      setQuickLinks(data);
    }
  }, [data]);

  const fetchMoreData = async () => {
    if (quickLinks?.links?.next) {
      const [newQuickLinks] = await useGet(quickLinks?.links?.next);
      if (!isEmpty(newQuickLinks)) {
        setQuickLinks({
          ...newQuickLinks,
          results: [...quickLinks.results, ...newQuickLinks.results],
        });
      }
    }
  };

  return (
    <div className={`${classes.root} removeScrollBar`}>
      {!original && (
        <Link href="/quicklinks">
          <h1 className={classes.mainLabel}>Quick Links</h1>
        </Link>
      )}

      <InfiniteScroll
        dataLength={quickLinks?.results?.length || 0}
        next={fetchMoreData}
        hasMore={Boolean(quickLinks?.links?.next) || false}
        loader={<Spinner />}
      >
        <>
          <Grid container className={classes.container}>
            {quickLinks?.results?.length === 0 && (
              <h3 className={classes.noQuickLink}>no quick links found</h3>
            )}
            {quickLinks?.results?.map((item: IQuickLink) => (
              <Link href={"/quicklinks/" + item.slug} key={item.id}>
                <Tooltip className="removeScrollBar" title={item.name}>
                  <Grid
                    key={item.id}
                    item
                    className={classes.eachLinkContainer}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={classes.img}
                      loading="lazy"
                    />
                  </Grid>
                </Tooltip>
              </Link>
            ))}
          </Grid>
        </>
      </InfiniteScroll>
    </div>
  );
};

export default QuickLinks;
