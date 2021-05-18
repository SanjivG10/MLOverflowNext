import React from "react";
import MomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Moment } from "moment";

interface IDate {
  selectedDate: Moment | null;
  handleDateChange: (date: MaterialUiPickersDate | null) => void;
  label: string;
}

const DateTimePicker: React.FC<IDate> = (props) => {
  const { selectedDate, handleDateChange, label } = props;
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        style={{ marginBottom: 20 }}
        autoOk
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="DD/MM/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={(date: MaterialUiPickersDate) => handleDateChange(date)}
      />
      ;
    </MuiPickersUtilsProvider>
  );
};

export default DateTimePicker;
