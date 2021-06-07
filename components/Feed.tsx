import React, { useState, useEffect, useContext } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "./Menu";
import { useRouter } from "next/router";
import moment from "moment";
import MyModal from "./Modal";
import FeedForm from "./Forms/FeedForm";
import { useDelete, usePatch } from "../hooks/requests";
import { COPY_FEED_URL, FEED_URL } from "../hooks/constants";
import Delete from "./Delete";
import { copyText } from "../helper";
import { UserContext } from "../pages/_app";

export interface IFeed {
  published_at: string;
  userImage: string;
  user: string;
  tags?: { name: string }[];
  isOwner: boolean;
  text: string;
  id: number;
  slug: string;
  editSuccess: (feed: IFeed) => void;
  hasVoted: boolean;
  hasBookmarked: boolean;
  updateOnDelete?: (slug: string) => void;
  home?: boolean;
  editSuccessFromList?: (feed: IFeed) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      position: "relative",
      padding: 4,
    },
    avatar: {
      height: "100%",
      width: "100%",
    },
    tagContainer: {
      marginBottom: 10,
      display: "flex",
      flexWrap: "wrap",
      borderBottom: "1px solid #bfbfbf",
      padding: 2,
    },
    tag: {
      marginLeft: 10,
      background: "#800000",
      width: "fit-content",
      marginBottom: 2,
      color: "white",
      padding: 4,
      lineHeight: "100%",
      display: "flex",
      alignItems: "center",
      borderRadius: 4,
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
    vote: {
      height: 24,
      width: 24,
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    clickPost: {
      "&:hover": {
        background: "#F8F9FA",
        cursor: "pointer",
      },
    },
    modal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#000",
      background: "#fff",
      border: "none !important",
      outline: "none !important",
    },
    modalContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent !important",
    },
  })
);

const Feeds: React.FC<IFeed> = (props: IFeed) => {
  const classes = useStyles();
  const {
    published_at,
    userImage,
    user,
    tags,
    isOwner,
    text,
    id,
    slug,
    editSuccess,
    hasBookmarked,
    hasVoted,
    updateOnDelete,
    home,
    editSuccessFromList,
  } = props;

  const { push } = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [bookmarked, setBookmarked] = useState(hasBookmarked);
  const [voted, setVoted] = useState(hasVoted);
  const [mode, setMode] = useState("edit");
  const [animateCopy, setAnimateCopy] = useState(false);

  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    let timer: any;
    if (animateCopy) {
      timer = setTimeout(() => {
        setAnimateCopy(false);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [animateCopy]);

  const router = useRouter();

  const editFeed = () => {
    closeAnchor();
    setMode("edit");
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }

    setOpen(true);
  };

  const bookmark = async () => {
    closeAnchor();

    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    const FEED_PATCH_URL = FEED_URL + id + "/";
    const [feed, error] = await usePatch(FEED_PATCH_URL, {
      bookmark: "bookmark",
    });

    setBookmarked(feed.hasBookmarked);
    setVoted(feed.hasVoted);
  };

  const deleteFeed = () => {
    closeAnchor();
    setMode("delete");
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    setOpen(true);
  };

  const menuOptions = [
    ...(isOwner
      ? [
          { name: "Edit", onClick: editFeed, icon: "/edit.svg" },
          { name: "Delete", onClick: deleteFeed, icon: "/delete.svg" },
        ]
      : []),
    !bookmarked
      ? { name: "Bookmark", onClick: bookmark, icon: "/bookmark.svg" }
      : {
          name: "Bookmarked",
          onClick: bookmark,
          icon: "/bookmarked.svg",
        },
  ];

  const renderTags = (myTags: { name: string }[]) => {
    return (
      <div className={classes.tagContainer}>
        {myTags.map((tag) => {
          return (
            <div
              key={tag.name}
              className={classes.tag}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                router.push("/search?key=" + tag.name);
              }}
            >
              {tag.name}
            </div>
          );
        })}
      </div>
    );
  };

  const setAnchor = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const closeAnchor = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addVote = async () => {
    closeAnchor();

    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    const FEED_PATCH_URL = FEED_URL + id + "/";
    const [feed, error] = await usePatch(FEED_PATCH_URL, {
      vote: "vote",
    });

    setBookmarked(feed.hasBookmarked);
    setVoted(feed.hasVoted);
  };

  const deleteAndRedirect = async () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    const URL = FEED_URL + `${id}/`;
    const [deletedFeed, error] = await useDelete(URL);

    if (updateOnDelete) {
      updateOnDelete(slug);
      return;
    }

    if (!error) {
      push("/feeds");
    }

    setOpen(false);
  };

  const copyFeedLink = () => {
    setAnimateCopy(true);
    const feedURL = COPY_FEED_URL + `${slug}/`;
    copyText(feedURL);
  };

  return (
    <>
      <Card className={`${classes.root}`}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <img
                src={userImage ? userImage : "/avatar.svg"}
                alt=""
                className={classes.avatar}
              />
            </Avatar>
          }
          action={
            !home && (
              <>
                <IconButton aria-label="settings" onClick={setAnchor}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  options={menuOptions}
                  anchor={anchorEl}
                  closeAnchor={closeAnchor}
                />
              </>
            )
          }
          title={user}
          subheader={moment(published_at).fromNow()}
        />
        {tags && tags.length > 0 && renderTags(tags)}
        <CardContent
          onClick={() => {
            router.push("/feeds/" + slug);
          }}
          className={classes.clickPost}
        >
          <Typography variant="body2" color="textSecondary">
            <div
              dangerouslySetInnerHTML={{ __html: text }}
              className="renderHTML"
            ></div>
          </Typography>
        </CardContent>
        {!home && (
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                addVote();
              }}
            >
              <img
                src={voted ? "/upDone.svg" : "/up.svg"}
                alt="asd"
                className={classes.vote}
              />
            </IconButton>
            <IconButton aria-label="share" onClick={copyFeedLink}>
              <ShareIcon />
              {animateCopy && <p className="copyAnimation">link copied</p>}
            </IconButton>

            <IconButton aria-label="bookmark" onClick={bookmark}>
              <img
                src={!bookmarked ? "/bookmark.svg" : "/bookmarked.svg"}
                alt=""
                className={classes.vote}
              />
            </IconButton>
          </CardActions>
        )}
      </Card>

      <MyModal show={open} setShow={handleClose}>
        {mode === "delete" ? (
          <Delete title="feed" onDelete={deleteAndRedirect} />
        ) : (
          <FeedForm
            successSubmit={(feed) => {
              if (editSuccess) {
                editSuccess(feed);
              }
              if (editSuccessFromList) {
                editSuccessFromList(feed);
              }
              setOpen(false);
            }}
            data={props}
          />
        )}
      </MyModal>
    </>
  );
};

export default Feeds;
