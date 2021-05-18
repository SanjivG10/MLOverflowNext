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
import CardMedia from "@material-ui/core/CardMedia";

export interface IFeed {
  time: string;
  userImage: string;
  username: string;
  tags: { name: string }[];
  isOwner: boolean;
  text: string;
  id: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      "&:hover": {
        ...theme.styles.onHover,
      },
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
  })
);

const Feeds: React.FC<IFeed> = (props: IFeed) => {
  const classes = useStyles();
  const { time, userImage, username, tags, isOwner, text, id } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const editFeed = () => {
    closeAnchor();
  };
  const bookmark = () => {
    closeAnchor();
  };

  const menuOptions = [
    ...(isOwner ? [{ name: "Edit", onClick: editFeed, icon: "edit.svg" }] : []),
    { name: "Bookmark", onClick: bookmark, icon: "bookmark.svg" },
  ];

  const renderTags = (myTags: { name: string }[]) => {
    return (
      <div className={classes.tagContainer}>
        {myTags.map((tag) => {
          return (
            <div key={tag.name} className={classes.tag}>
              {tag.name}
            </div>
          );
        })}
      </div>
    );
  };

  const setAnchor = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeAnchor = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.root}>
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
        title={username}
        subheader={time}
      />
      {tags && tags.length > 0 && renderTags(tags)}
      <CardMedia
        className={classes.media}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LARGE_elevation.jpg/1200px-LARGE_elevation.jpg"
        title="feed"
      />
      <CardContent>
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
