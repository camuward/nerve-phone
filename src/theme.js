import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#77ffc5",
      main: "#29ff94",
      dark: "#00ca65",
      contrastText: "#000",
    },
    secondary: {
      light: "#2c2c2c",
      main: "#000",
      dark: "#000",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#181818",
      default: "#303030",
    },
  },
});

export default theme;
