import { forwardRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: ["Fira Code", "sans-serif"].join(","),
    fontWeight: "500",
  },
}));

const Navbar = forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <AppBar position="static" ref={ref}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {props.title ?? "nerve"}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;
