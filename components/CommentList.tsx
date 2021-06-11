import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { IComment } from "./Comment";
import Comment from "./Comment";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGet } from "../hooks/requests";
import { getUniqueValues, isEmpty } from "../helper";

interface IProps {
  comments: {
    results: IComment[];
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
  paper?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    marginTop: 40,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    justifyContent: "center",
  },

  commentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bolder",
  },
  noCommentLabel: {
    margin: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 20,
    fontStyle: "italic",
  },
}));

const CommentList: React.FC<IProps> = ({ comments, paper }) => {
  const classes = useStyles();

  const [data, setData] = useState(comments);

  useEffect(() => {
    if (comments) {
      setData(comments);
    }
  }, [comments]);

  const fetchMoreComments = async () => {
    if (data.links.next) {
      const [newComments] = await useGet(data.links.next);
      if (!isEmpty(newComments)) {
        const results = [...data.results, ...newComments.results];
        const uniqueResults = getUniqueValues(results);
        setData({
          ...newComments,
          results: uniqueResults,
        });
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.label}>COMMENTS</div>
      {data.results.length === 0 && (
        <div className={classes.noCommentLabel}>No comments found.</div>
      )}

      <InfiniteScroll
        dataLength={data?.results?.length || 0}
        next={fetchMoreComments}
        hasMore={Boolean(data?.links?.next) || false}
        loader={<Spinner />}
      >
        {data.results.map((comment: IComment) => {
          return <Comment {...comment} key={comment.id} paper={paper} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default CommentList;
