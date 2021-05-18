import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "white",
    },
    hover: {
      main: "#F8F9FA",
    },
  },
  styles: {
    onHover: {
      background: "#F8F9FA",
      cursor: "pointer",
    },
  },
});

export default theme;
