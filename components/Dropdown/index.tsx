import React from "react";
import Select from "@material-ui/core/Select";
import { IFilter } from "./../Filter";
import { makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

interface IProps {
  filter: IFilter;
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
    margin: theme.spacing(1),
    minWidth: 120,
    "&:focused": {
      outline: "none !important",
      border: "none !important",
    },
  },
}));

export default function DropDown(props: IProps) {
  const { filter } = props;

  const [state, setState] = React.useState<{
    name: string;
    icon: string;
    onClick: (filter: string) => void;
  }>({ name: filter.name, icon: filter.icon, onClick: (s: string) => {} });

  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setState({ ...state, name: event.target.value as string });
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-native-simple">
        {filter.name}
      </InputLabel>

      <Select
        native
        value={state.name}
        onChange={handleChange}
        className={classes.container}
      >
        <option aria-label="None" value="" />
        {filter.options.map((option) => {
          return (
            <option
              key={option.name}
              value={option.name}
              className={classes.option}
            >
              {option.name}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
}
