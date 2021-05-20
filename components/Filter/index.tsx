import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Dropdown from "./../Dropdown";

export type OptionType = {
  name: string;
  icon: string;
  onClick: (filter: string) => void;
};

export interface IFilter {
  name: string;
  icon: string;
  options: OptionType[];
}

interface IProps {
  filters: IFilter[];
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    background: "#bfbfbf",
    borderRadius: 10,
    margin: 10,
    padding: 4,
  },
  eachFilter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 10,
    color: "white",
    borderRadius: 4,
    "&:hover": {
      transform: "scale(1.2,1.2)",
    },
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 4,
  },
  label: {},
}));

export const Filter = (props: IProps) => {
  const classes = useStyles();

  const { filters } = props;

  return (
    <div className={classes.container}>
      {filters.map((filter) => {
        return (
          <div className={classes.eachFilter} key={filter.name}>
            <Dropdown filter={filter} />
          </div>
        );
      })}
    </div>
  );
};
