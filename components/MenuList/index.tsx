import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Menu from "../Menu";
import { OptionType } from "../Filter";

interface IProps {
  options: OptionType[];
  anchor: HTMLElement | null;
  setAnchors: React.Dispatch<
    React.SetStateAction<{ [key: string]: HTMLElement | null }>
  >;
  name: string;
  anchors: { [name: string]: null | HTMLElement };
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    color: "#000",
    background: "#fff",
    borderRadius: 4,
  },
  icon: {
    width: 12,
    height: 12,
    marginLeft: 8,
  },
  option: {
    fontFamily: "Rpboto",
    fontSize: 18,
  },
  formControl: {
    margin: 4,
    minWidth: 120,
    "&:focused": {
      outline: "none !important",
      border: "none !important",
    },
  },
}));

export default function MenuList(props: IProps) {
  const { options, anchor, name, anchors, setAnchors } = props;

  const closeAnchor = () => {
    const newAnchors = { ...anchors };
    newAnchors[name] = null;
    setAnchors(newAnchors);
  };

  const classes = useStyles();

  return <Menu options={options} anchor={anchor} closeAnchor={closeAnchor} />;
}
