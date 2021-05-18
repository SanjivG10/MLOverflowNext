import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

type Option = {
  name: string;
  onClick: () => void;
  icon: string;
};

interface menuOptions {
  options: Option[];
  anchor: HTMLElement | null;
  closeAnchor: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      height: 20,
      width: 20,
      marginRight: 10,
    },
  })
);

const MyMenu: React.FC<menuOptions> = ({ options, anchor, closeAnchor }) => {
  const classes = useStyles();
  return (
    <>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={closeAnchor}
      >
        {options.map((option) => {
          return (
            <MenuItem onClick={option.onClick} key={option.name}>
              <img src={option.icon} alt="" className={classes.icon} />
              <div>{option.name}</div>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MyMenu;
