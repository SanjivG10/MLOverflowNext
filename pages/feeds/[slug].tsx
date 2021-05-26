import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import Feed, { IFeed } from "../../components/Feed";
import CommentForm from "../../components/Forms/CommentForm";
import CommentList from "./../../components/CommentList";
import axios from "axios";
import { COMMENT_URL, FEED_URL } from "../../hooks/constants";
import { getAuthHeadersFromCookie } from "../../hooks/requests";
import { GetServerSideProps } from "next";
import { IComment } from "../../components/Comment";

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

  return (
    <div className={classes.main}>
      <Header title="Feeds" />
      <Grid container spacing={3} className={classes.container}>
        <Grid item sm={6}>
          <div className={classes.feed}>
            <Feed {...data} editSuccess={onEditSuccess} />

            <div className={classes.commentContainer}>
              <CommentForm onSuccess={onCommentSuccess} feedId={data.id} />
            </div>

            <div className={classes.commentList}>
              <CommentList comments={feedComments.results} />
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
