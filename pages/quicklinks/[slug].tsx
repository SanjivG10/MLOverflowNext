import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import axios from "axios";
import {
  COMMENT_URL,
  FEED_URL,
  HOME_URL_FOR_COPY,
  QUICKLINK_URL,
} from "../../hooks/constants";
import { getAuthHeadersFromCookie } from "../../hooks/requests";
import { GetServerSideProps } from "next";
import { IQuickLink } from "../../components/QuickLinkList";
import QuickLink from "../../components/QuickLink";
import { isEmpty } from "../../helper";
import { QUICK_LINK_TITLE } from "../../constants";
import OpenGraphTags from "../../components/OpenGraphTags";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    marginTop: 40,
  },
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },

  feed: {
    display: "flex",
    justifyContent: "center",
  },
}));

const QuickLinkPage: React.FC = ({ _data }) => {
  const classes = useStyles();

  const [data, setData] = useState<IQuickLink | any>(_data);
  const [error, setError] = useState<string>("");

  const onEditSuccess = (quickLink: IQuickLink) => {
    setData(quickLink);
  };

  const oGprops = {
    title: data.name || QUICK_LINK_TITLE,
    description: data.description,
    ogTitle: data.name || QUICK_LINK_TITLE,
    image: data.image,
    url: HOME_URL_FOR_COPY + "quicklinks/" + data.slug,
  };

  return (
    <div className={classes.main}>
      <OpenGraphTags {...oGprops} />
      <Grid container spacing={3} className={classes.container}>
        <Grid item sm={6}>
          <div className={classes.feed}>
            <QuickLink {...data} onEditSuccess={onEditSuccess} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuickLinkPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  let _data = {};
  try {
    const { data } = await axios.get(
      QUICKLINK_URL + `${slug}/`,
      getAuthHeadersFromCookie(context)
    );
    _data = data;
  } catch (error) {
    console.log(error);
  }

  if (isEmpty(_data)) {
    return {
      redirect: {
        destination: "/quicklinks",
        permanent: false,
      },
    };
  }

  return {
    props: { _data },
  };
};
