import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MenuList from "./../MenuList";
import Button from "@material-ui/core/Button";

export type OptionType = {
  name: string;
  icon: string;
  onClick: (filter?: string) => void;
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
    alignItems: "center",
    background: "#faf8f9",
    borderRadius: 10,
    margin: 10,
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
    height: 24,
    width: 24,
    marginRight: 10,
  },
  label: {},
}));

export const Filter = (props: IProps) => {
  const { filters } = props;
  const [anchors, setAnchors] = React.useState<{
    [key: string]: null | HTMLElement;
  }>({});
  const classes = useStyles();

  const setAnchor = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    const anchor = event.currentTarget;
    let newAnchors = { ...anchors };
    newAnchors[name] = anchor;
    setAnchors(newAnchors);
  };

  return (
    <div className={classes.container}>
      {filters.map((filter, index) => {
        return (
          <div className={classes.eachFilter} key={filter.name}>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setAnchor(event, filter.name);
              }}
              variant="outlined"
              color="primary"
            >
              <img src={filter.icon} className={classes.icon} />
              <div>{filter.name}</div>
            </Button>
            <MenuList
              options={filter.options}
              anchor={anchors[filter.name]}
              setAnchors={setAnchors}
              name={filter.name}
              anchors={anchors}
            />
          </div>
        );
      })}
    </div>
  );
};
