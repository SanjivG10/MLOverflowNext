import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import Feed, { IFeed } from "../../components/Feed";
import CommentForm from "../../components/Forms/CommentForm";
import CommentList from "./../../components/CommentList";
import axios from "axios";
import { COMMENT_URL, FEED_URL, HOME_URL } from "../../hooks/constants";
import { getAuthHeadersFromCookie } from "../../hooks/requests";
import { GetServerSideProps } from "next";
import { IComment } from "../../components/Comment";
import { FEED_TITLE } from "../../constants";
import OpenGraphTags from "../../components/OpenGraphTags";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    marginTop: 40,
  },
  container: {
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    justifyContent: "center",
  },

  feed: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  commentContainer: {
    marginTop: 20,
  },
  commentList: {},
}));

const FeedPage: React.FC = ({ _data, comments }) => {
  const classes = useStyles();

  const [data, setData] = useState<IFeed | any>(_data);
  const [feedComments, setFeedComments] = useState(comments);
  const [error, setError] = useState<string>("");

  const onEditSuccess = (feed: IFeed) => {
    setData(feed);
  };

  const onCommentSuccess = (comment: IComment) => {
    const commentResults = [comment, ...feedComments.results];
    const newFeedComments = { ...feedComments, results: commentResults };
    setFeedComments(newFeedComments);
  };

  const getTextAndImage = (text: string) => {
    const span = document.createElement("div");
    span.innerHTML = text;
    let imgSrc = "";
    const image_container = span.querySelector("img");
    if (image_container !== null) {
      imgSrc = image_container.getAttribute("src") || "/logo_white.png";
    }
    return [span.textContent || span.innerText, imgSrc];
  };

  const [title, img] = getTextAndImage(data.text);

  const oGprops = {
    title: title ? title.substr(0, 100) : FEED_TITLE,
    description: title || FEED_TITLE,
    ogTitle: title ? title.substr(0, 100) : FEED_TITLE,
    image: img,
    url: HOME_URL + "feeds/" + `${data.slug}`,
  };

  return (
    <div className={classes.main}>
      <OpenGraphTags {...oGprops} />
      <Grid container spacing={3} className={classes.container}>
        <Grid item sm={6}>
          <div className={classes.feed}>
            <Feed {...data} editSuccess={onEditSuccess} />

            <div className={classes.commentContainer}>
              <CommentForm onSuccess={onCommentSuccess} feedId={data.id} />
            </div>

            <div className={classes.commentList}>
              <CommentList comments={feedComments} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FeedPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const { data } = await axios.get(
    FEED_URL + `${slug}/`,
    getAuthHeadersFromCookie(context)
  );

  const { data: comments } = await axios.get(
    COMMENT_URL + `?feed=${data.id}`,
    getAuthHeadersFromCookie(context)
  );

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { _data: data, comments: comments },
  };
};
