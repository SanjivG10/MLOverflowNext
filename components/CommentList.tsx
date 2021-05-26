import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { IComment } from "./Comment";
import Comment from "./Comment";

interface IProps {
  comments: IComment[];
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

const CommentList: React.FC<IProps> = ({ comments }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.label}>COMMENTS</div>
      {comments?.length === 0 && (
        <div className={classes.noCommentLabel}>No comments found.</div>
      )}
      {comments?.map((comment: IComment) => {
        return <Comment {...comment} key={comment.id} />;
      })}
    </div>
  );
};

export default CommentList;
