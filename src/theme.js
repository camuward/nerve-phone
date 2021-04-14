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
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#181818",
      default: "#303030",
    },
  },
  typography: {
    h1: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
    h2: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
    h4: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
  },
});

export const DarkTheme = createMuiTheme({
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
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#181818",
      default: "#303030",
    },
  },
  typography: {
    h1: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
    h2: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
    h4: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
  },
});

export const LightTheme = createMuiTheme({
  palette: {
    type: "light",
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
      primary: "rgba(0, 0, 0, 0.87)", 
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#ffffff",
      default: "#fafafa"
    },
  },
  typography: {
    h1: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
    h2: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
    h4: {
      fontFamily: ["'DM Sans'", "'Roboto'", "sans-serif"].join(","),
    },
  },
});

export default theme;
