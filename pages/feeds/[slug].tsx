import React from "react";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import Feed from "../../components/Feed";
import { DUMMY_FEED, DUMMY_COMMENTS } from "../../dummy";
import CommentForm from "../../components/Forms/CommentForm";
import CommentList from "./../../components/CommentList";

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

interface IProps {}

const FeedPage: React.FC<IProps> = () => {
  const { query } = useRouter();
  const slug = query.slug;
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header title="Feeds" />
      <Grid container spacing={3} className={classes.container}>
        <Grid item sm={6}>
          <div className={classes.feed}>
            <Feed {...DUMMY_FEED[1]} />

            <div className={classes.commentContainer}>
              <CommentForm />
            </div>

            <div className={classes.commentList}>
              <CommentList comments={DUMMY_COMMENTS} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FeedPage;
