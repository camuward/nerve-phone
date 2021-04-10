import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
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
  },
});

export default theme;
