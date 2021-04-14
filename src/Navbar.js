import { forwardRef, useState } from "react";
import { useRouter } from "next/router";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import VibrationRoundedIcon from "@material-ui/icons/VibrationRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import WallpaperRoundedIcon from "@material-ui/icons/WallpaperRounded";
import SpeedRoundedIcon from "@material-ui/icons/SpeedRounded";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    fontFamily: ["Fira Code", "sans-serif"].join(","),
    fontWeight: "500",
    color: theme.palette.text.primary,
  },
  nav: {
    display: "flex",
    gap: theme.spacing(1),
    marginRight: theme.spacing(2),
    "& > *": {
      color: theme.palette.text.primary,
    },
  },
  buyButton: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  drawerButton: {
    color: "#fff",
  },
}));

const PageDrawer = forwardRef(
  ({ open, page, onOpen, onClose, onSubmit, ...props }, ref) => {
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (
      <SwipeableDrawer
        open={open}
        anchor="right"
        onClose={onClose}
        onOpen={onOpen}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        ref={ref}
        {...props}
      >
        <List component="nav">
          {[
            ["Overview", <VibrationRoundedIcon />, "/"],
            ["Design", <WallpaperRoundedIcon />, "/design"],
            ["Performance", <SpeedRoundedIcon />, "/"],
            ["Specs", <AssessmentRoundedIcon />, "/"],
            ["Buy Now", <ShoppingCartRoundedIcon />, "/"],
          ].map(([text, icon, link], i) => {
            return (
              <ListItem
                button
                selected={page === text}
                onClick={page === text ? onClose : () => onSubmit(link)}
                key={i}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    );
  }
);

const Navbar = forwardRef(({ title, page, ...props }, ref) => {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggleDrawer = to => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(to || !open);
  };
  return (
    <AppBar position="static" ref={ref} {...props}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title ?? "nerve"}
        </Typography>
        <Hidden smDown>
          <Box className={classes.nav}>
            <Button
              color="secondary"
              onClick={() => router.push("/")}
              size="large"
            >
              Overview
            </Button>
            <Button
              color="secondary"
              onClick={() => router.push("/design")}
              size="large"
            >
              Design
            </Button>
            <Button
              color="secondary"
              onClick={() => router.push("/")}
              size="large"
            >
              Performance
            </Button>
            <Button
              color="secondary"
              onClick={() => router.push("/")}
              size="large"
            >
              Specs
            </Button>
          </Box>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => router.push("/")}
            className={classes.buyButton}
          >
            Buy Now
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Button
            color="secondary"
            onClick={toggleDrawer(true)}
            endIcon={<MenuRoundedIcon />}
            anchor="right"
            size="large"
            className={classes.drawerButton}
          >
            {page}
          </Button>
          <PageDrawer
            open={open}
            onOpen={toggleDrawer(true)}
            onClose={toggleDrawer(false)}
            onSubmit={router.push}
            page={page}
          />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;
