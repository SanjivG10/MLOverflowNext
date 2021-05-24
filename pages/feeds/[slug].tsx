import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import Feed, { IFeed } from "../../components/Feed";
import { DUMMY_COMMENTS } from "../../dummy";
import CommentForm from "../../components/Forms/CommentForm";
import CommentList from "./../../components/CommentList";
import axios from "axios";
import { FEED_URL } from "../../hooks/constants";
import { getAuthHeaders, handleAxiosError } from "../../hooks/requests";

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

const FeedPage: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const [data, setData] = useState<IFeed | any>({});
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const queryPath = window.location.pathname;
    const paths = queryPath.split("/");

    if (paths.length === 3) {
      const slug = paths[2];
      const getFeed = async () => {
        try {
          const { data } = await axios.get(
            FEED_URL + `${slug}/`,
            getAuthHeaders()
          );
          setData(data);
        } catch (error) {
          const [err, code] = handleAxiosError(error);
          if (code === 404) {
            router.push("/404");
          }

          setError(err);
        }
      };
      getFeed();
    }
  }, []);

  const onEditSuccess = (feed: IFeed) => {
    setData(feed);
  };

  return (
    <div className={classes.main}>
      <Header title="Feeds" />
      <Grid container spacing={3} className={classes.container}>
        <Grid item sm={6}>
          <div className={classes.feed}>
            <Feed {...data} editSuccess={onEditSuccess} />

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
