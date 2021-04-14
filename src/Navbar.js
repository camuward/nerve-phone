import { forwardRef, useState } from "react";
import { useRouter } from "next/router";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
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
    return (
      <Drawer
        open={open}
        anchor="right"
        onClose={onClose}
        onOpen={onOpen}
        ref={ref}
        {...props}
      >
        <List component="nav">
          <ListItem
            button
            selected={page === "Overview"}
            onClick={page === "Overview" ? onClose : () => onSubmit("/")}
          >
            <ListItemIcon>
              <VibrationRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Overview"} />
          </ListItem>
          <ListItem
            button
            selected={page === "Design"}
            onClick={page === "Design" ? onClose : () => onSubmit("/design")}
          >
            <ListItemIcon>
              {" "}
              <WallpaperRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Design"} />
          </ListItem>
          <ListItem
            button
            selected={page === "Performance"}
            onClick={
              page === "Performance" ? onClose : () => onSubmit("/speed")
            }
          >
            <ListItemIcon>
              <SpeedRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Performance"} />
          </ListItem>
          <ListItem
            button
            selected={page === "Specs"}
            onClick={page === "Specs" ? onClose : () => onSubmit("/specs")}
          >
            <ListItemIcon>
              <AssessmentRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Specs"} />
          </ListItem>
          <ListItem
            button
            selected={page === "Purchase"}
            onClick={
              page === "Purchase" ? onClose : () => onSubmit("/purchase")
            }
            key={i}
          >
            <ListItemIcon>
              <ShoppingCartRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Purchase"} />
          </ListItem>
        </List>
      </Drawer>
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
              onClick={() => router.push("/speed")}
              size="large"
            >
              Performance
            </Button>
            <Button
              color="secondary"
              onClick={() => router.push("/specs")}
              size="large"
            >
              Specs
            </Button>
          </Box>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => router.push("/purchase")}
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
