import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

type Option = {
  name: string;
  onClick: (name?: string) => void;
  icon: string;
};

interface MenuOptions {
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

const MyMenu: React.FC<MenuOptions> = ({ options, anchor, closeAnchor }) => {
  const classes = useStyles();
  return (
    <>
      <Menu anchorEl={anchor} open={anchor != null} onClose={closeAnchor}>
        {options.map((option) => {
          return (
            <MenuItem
              onClick={() => {
                option.onClick(option.name);
                closeAnchor();
              }}
              key={option.name}
            >
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
