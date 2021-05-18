import React from "react";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

interface IProps {
  items: string[];
  selected: string;
  setSelected: (item: string) => void;
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
      marginBottom: 10,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function DropDown(props: IProps) {
  const { items, selected, setSelected, label } = props;

  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        value={selected}
        onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
          setSelected(e.target.value as string);
        }}
        label={label}
      >
        <MenuItem value="None">
          <em>None</em>
        </MenuItem>
        {items.map((item: string) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
