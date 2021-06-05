import React, { useContext, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { COMMENT_URL, COMMENT_URL_PAPER } from "../hooks/constants";
import { useDelete, usePatch } from "../hooks/requests";
import MyModal from "./Modal";
import CommentForm from "./Forms/CommentForm";
import Delete from "./Delete";
import { UserContext } from "../pages/_app";

const useStyles = makeStyles((theme: Theme) => ({
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
  editButtons: {
    marginBottom: 10,
    marginTop: 10,
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
    marginRight: 10,
    "&:hover": {
      transform: "scale(1.3,1.3)",
    },
    position: "absolute",
    right: 10,
  },
  text: {
    marginTop: 10,
  },
  deleteContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: theme.palette.primary.light,
    color: "#fff",
    borderRadius: 4,
    padding: 8,
    margin: 10,
  },
}));

export interface IComment {
  text: string;
  isOwner: boolean;
  hasVoted: boolean;
  hasBookmarked: boolean;
  votes_count: number;
  id: number;
  paper?: boolean;
}

const Comment = (props: IComment) => {
  const classes = useStyles();

  const { text, hasVoted, isOwner, hasBookmarked, votes_count, id, paper } =
    props;

  const [bookmarked, setBookmarked] = useState(hasBookmarked);
  const [voted, setVoted] = useState(hasVoted);
  const [voteCount, setVoteCount] = useState(votes_count);
  const [show, setShow] = useState(false);
  const [commentText, setCommentText] = useState(text);
  const [mode, setMode] = useState<string>("edit");
  const [deleted, setDeleted] = useState<boolean>(false);

  const { state, dispatch } = useContext(UserContext);

  const addVote = async () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    const COMMENT_PATCH_URL =
      (paper ? COMMENT_URL_PAPER : COMMENT_URL) + id + "/";
    const [comment, error] = await usePatch(COMMENT_PATCH_URL, {
      vote: "vote",
    });

    setVoted(comment.hasVoted);
    setBookmarked(comment.hasBookmarked);
    setVoteCount(comment.votes_count);
  };

  const bookmark = async () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    const COMMENT_PATCH_URL =
      (paper ? COMMENT_URL_PAPER : COMMENT_URL) + id + "/";
    const [comment, error] = await usePatch(COMMENT_PATCH_URL, {
      bookmark: "bookmark",
    });

    setVoted(comment.hasVoted);
    setBookmarked(comment.hasBookmarked);
  };

  const onEditSuccess = (comment: IComment) => {
    setCommentText(comment.text);
    setShow(false);
  };

  const deleteComment = async () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    const URL = paper ? COMMENT_URL_PAPER + `${id}/` : COMMENT_URL + `${id}/`;
    const [delComment, error] = await useDelete(URL);
    if (!error) {
      setDeleted(true);
    }

    setShow(false);
  };

  return deleted ? (
    <div className={classes.deleteContainer}>This comment has been deleted</div>
  ) : (
    <div className={classes.eachCommentContainer} key={id}>
      <div className={classes.voteContainer}>
        <img
          alt=""
          src={voted ? "/upDone.svg" : "/up.svg"}
          className={classes.voteUp}
          onClick={addVote}
        />
        <div>{getVotesInNumbers(voteCount)}</div>
      </div>
      <div className={classes.eachComment}>
        <div className={classes.editButtons}>
          <img
            src={bookmarked ? "/bookmarked.svg" : "/bookmark.svg"}
            alt=""
            className={classes.bookmark}
            onClick={bookmark}
          />

          {isOwner && (
            <>
              <span
                className={classes.edit}
                onClick={() => {
                  if (!state.loginStatus) {
                    dispatch({ type: "toggleModal", show: true });
                    return;
                  }
                  setMode("edit");
                  setShow(true);
                }}
              >
                edit
              </span>
              <span
                className={classes.delete}
                onClick={() => {
                  if (!state.loginStatus) {
                    dispatch({ type: "toggleModal", show: true });
                    return;
                  }
                  setMode("delete");
                  setShow(true);
                }}
              >
                delete
              </span>
            </>
          )}
        </div>
        <div
          className={`renderHTML ${classes.text}`}
          dangerouslySetInnerHTML={{ __html: commentText }}
        ></div>
      </div>

      <MyModal
        show={show}
        setShow={(val: boolean) => {
          setShow(val);
        }}
      >
        {mode === "edit" ? (
          <CommentForm
            onSuccess={onEditSuccess}
            data={props}
            paperComment={paper}
          />
        ) : (
          <Delete title="comment" onDelete={deleteComment} />
        )}
      </MyModal>
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

export default Comment;
