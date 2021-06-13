import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { textLimit } from "../helper";
import { Moment } from "moment";

export interface IPaper {
  title: string;
  created_at: Moment;
  published_at: Moment;
  tags?: { name: string }[];
  abstract: string;
  authors: { name: string }[];
  meta?: string;
  link: string;
  codes?: {
    link: string;
    language: string;
  }[];
  id: number;
  slug: string;
  dataset?: string;
  model?: string;
  resourcesCount: {
    videoN?: number;
    audioN?: number;
    articleN?: number;
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.paper,
      marginBottom: 40,
      "&:hover": {
        cursor: "pointer",
      },
      boxShadow: "2px 2px 2px 2px #DAE0E6",
      padding: 10,
    },
    value: { marginLeft: 10 },
    title: {
      fontSize: 18,
      fontWeight: "bolder",
    },
    abstract: {
      fontSize: 16,
      overflow: "hidden",
    },
    link: {
      textDecoration: "none",
    },
    codes: {},
    icon: {
      width: 24,
      height: 24,
      padding: 2,
    },
    eachRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    },
    langIcon: {
      marginLeft: 10,
      height: 20,
      width: 20,
    },
    resourcesList: {
      display: "flex",
    },
    eachResource: {
      display: "flex",
      flexDirection: "row",
      marginLeft: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    rIcon: {
      marginRight: 5,
    },
  })
);

const Paper = (props: IPaper) => {
  const { title, abstract, link, codes, resourcesCount } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className={classes.eachRow}>
          <img alt="" className={classes.icon} src="/title.svg" />
          <div className={`${classes.title} ${classes.value}`}>
            {title && title.toUpperCase()}
          </div>
        </div>
      </div>
      <div className={classes.eachRow}>
        <img alt="" className={classes.icon} src="/abstract.svg" />
        <div className={`${classes.abstract} ${classes.value}`}>
          {textLimit(abstract, 200)}
        </div>
      </div>
      <div className={classes.eachRow}>
        <img alt="" className={classes.icon} src="/link.svg" />
        <a
          href={link}
          target="_blank"
          rel="noreferer nofollow"
          className={`${classes.link} ${classes.value}`}
        >
          {link}
        </a>
      </div>

      {codes && codes.length > 0 && codes[0].link && codes[0].language && (
        <div className={classes.eachRow}>
          <img alt="" className={classes.icon} src="/code.svg" />
          <a
            href={link}
            target="_blank"
            rel="noreferer nofollow"
            className={`${classes.link} ${classes.value}`}
          >
            {codes[0].link}
          </a>
          {codes[0].language && (
            <img
              alt=""
              className={classes.langIcon}
              src={`/${codes[0].language}.svg`}
            />
          )}
        </div>
      )}

      <div className={classes.resourcesList}>
        <div className={classes.eachResource}>
          <img
            className={`${classes.icon} ${classes.rIcon}`}
            src="/video.svg"
            alt=""
          />
          {resourcesCount?.videoN || 0}
        </div>

        <div className={classes.eachResource}>
          <img
            className={`${classes.icon} ${classes.rIcon}`}
            src="/article.svg"
            alt=""
          />
          {resourcesCount?.articleN || 0}
        </div>

        <div className={classes.eachResource}>
          <img
            className={`${classes.icon} ${classes.rIcon}`}
            src="/audio.svg"
            alt=""
          />
          {resourcesCount?.audioN || 0}
        </div>
      </div>
    </div>
  );
};

export default Paper;
