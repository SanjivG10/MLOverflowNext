import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { QUICK_LINKS } from "./../dummy";

const useStyles = makeStyles((theme) => ({
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
    width: 80,
    height: 80,
    borderRadius: "50%",
    objectFit: "cover",
  },
  eachLinkContainer: {
    textAlign: "center",
    "&:hover": {
      boxShadow: "2px 2px #F8F9FA",
      transform: "scale(1.05,1.05)",
    },
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    wordWrap: "break-word",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const QuickLinks = () => {
  const classes = useStyles();

  const handleClick = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const items = QUICK_LINKS;

  return (
    <Grid className={classes.root}>
      <h1 className={classes.mainLabel}>Quick Links</h1>
      <Grid item>
        <Grid container className={classes.container}>
          {items.map((item) => (
            <Grid
              key={item.id}
              item
              className={classes.eachLinkContainer}
              onClick={() => handleClick(item.link)}
            >
              <img src={item.img} alt={item.name} className={classes.img} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuickLinks;
