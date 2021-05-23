import React from "react";
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

export interface IFeed {
  published_at: string;
  userImage: string;
  user: string;
  tags?: { name: string }[];
  isOwner: boolean;
  text: string;
  id: string;
  slug: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
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
        ...theme.styles.onHover,
      },
    },
  })
);

const Feeds: React.FC<IFeed> = (props: IFeed) => {
  const classes = useStyles();
  const { published_at, userImage, user, tags, isOwner, text, id, slug } =
    props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const router = useRouter();

  const editFeed = () => {
    closeAnchor();
  };
  const bookmark = () => {
    closeAnchor();
  };

  const menuOptions = [
    ...(isOwner
      ? [{ name: "Edit", onClick: editFeed, icon: "/edit.svg" }]
      : []),
    { name: "Bookmark", onClick: bookmark, icon: "/bookmark.svg" },
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
                router.push("/tag?key=" + tag.name);
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

  return (
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <img src="/up.svg" alt="asd" className={classes.vote} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton aria-label="bookmark" onClick={bookmark}>
          <img src="/bookmark.svg" alt="" className={classes.vote} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Feeds;
