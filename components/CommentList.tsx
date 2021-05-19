import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

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
  eachCommentContainer: {
    display: "flex",
    marginBottom: 10,
    border: "1px solid #bfbfbf",
    minHeight: 150,
  },
  eachComment: {
    position: "relative",
    width: "100%",
  },
  label: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bolder",
  },
  editButtons: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  edit: {
    background: "teal",
    padding: 4,
    color: "white",
    marginRight: 4,
    borderRadius: 10,

    "&:hover": {
      cursor: "pointer",
    },
  },
  delete: {
    background: "#800000",
    padding: 4,
    color: "white",
    borderRadius: 10,
    "&:hover": {
      cursor: "pointer",
    },
  },
  voteUp: {
    width: 36,
    height: 36,
    padding: 2,
    "&:hover": {
      transform: "scale(1.3,1.3)",
    },
  },
  voteContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#FAF8F9",
    textAlign: "center",
    marginRight: 10,
  },

  bookmark: {
    height: 20,
    width: 20,
    position: "absolute",
    right: "10px ",

    "&:hover": {
      transform: "scale(1.3,1.3)",
    },
  },
}));

interface IComment {
  text: string;
  isOwner: boolean;
  hasVoted: boolean;
  hasBookmarked: boolean;
  votes: number;
}

interface IProps {
  comments: IComment[];
}

const CommentList: React.FC<IProps> = ({ comments }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.label}>RECENT COMMENTS</div>
      {comments.map((comment: IComment) => {
        return (
          <div className={classes.eachCommentContainer}>
            <div className={classes.voteContainer}>
              <img
                alt=""
                src={comment.hasVoted ? "/upDone.svg" : "/up.svg"}
                className={classes.voteUp}
              />
              <div>{getVotesInNumbers(comment.votes)}</div>
            </div>
            <div className={classes.eachComment}>
              {comment.isOwner && (
                <div className={classes.editButtons}>
                  <img
                    src={
                      comment.hasBookmarked
                        ? "/bookmarked.svg"
                        : "/bookmark.svg"
                    }
                    alt=""
                    className={classes.bookmark}
                  />
                  <span className={classes.edit}>edit</span>
                  <span className={classes.delete}>delete</span>
                </div>
              )}
              <div
                className={"renderHTML"}
                dangerouslySetInnerHTML={{ __html: comment.text }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const getVotesInNumbers = (num: number) => {
  if (num > 999999)
    return Math.abs(num) > 999999
      ? (Math.abs(num) / 1000000).toFixed(1) + "m"
      : Math.abs(num);
  return Math.abs(num) > 999
    ? (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.abs(num);
};

export default CommentList;
