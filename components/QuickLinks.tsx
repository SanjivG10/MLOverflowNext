import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { IQuickLink } from "./QuickLinkList";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  mainLabel: {
    marginLeft: 20,
    fontSize: 40,
    textAlign: "center",
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
}));

const QuickLinks = ({ data }) => {
  const classes = useStyles();

  const [quickLinks, setQuickLinks] = useState({
    ...data,
    results: [...data.results, ...data.results],
  });

  return (
    <Grid className={classes.root}>
      <h1 className={classes.mainLabel}>Quick Links</h1>
      <Grid item>
        <Grid container className={classes.container}>
          {quickLinks?.results?.map((item: IQuickLink) => (
            <Link href={"/quicklinks/" + item.slug} key={item.id}>
              <Tooltip title={item.name}>
                <Grid key={item.id} item className={classes.eachLinkContainer}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={classes.img}
                  />
                </Grid>
              </Tooltip>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuickLinks;
