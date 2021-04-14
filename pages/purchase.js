import { forwardRef, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import FlashOnRounded from "@material-ui/icons/FlashOnRounded";
import NoSsr from "@material-ui/core/NoSsr";
import Grow from "@material-ui/core/Grow";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import Toolbar from "@material-ui/core/Toolbar";

import Navbar from "../src/Navbar";
import LinkCard from "../src/LinkCard";
import Hero from "../src/Hero";
import ColorButton from "../src/ColorButton";

const useStyles = makeStyles(theme => ({
  navbar: {
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
  },
  contentList: {
    marginTop: theme.spacing(8),
    flexGrow: 1,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  phoneBody: {
    position: "absolute",
    width: 200,
    height: 200,
    transform: "translateY(-30%)",
    backgroundColor: theme.palette.secondary.contrastText,
    borderBottom: "none",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 4,
  },
  phoneScreen: {
    position: "relative",
    zIndex: 0,
    height: 195,
    borderBottom: "none",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    background:
      "linear-gradient(165deg, #29ff94, #05ffa3, #00ffb1, #00ffbe, #00ffca, #00ffd5, #00ffdf, #1cffe8)",
  },
  phoneBody: {
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      width: 140,
      height: 140,
    },
    [theme.breakpoints.up("sm")]: {
      width: 200,
      height: 200,
    },
    transform: "translateY(-30%)",
    backgroundColor: theme.palette.primary.contrastText,
    borderBottom: "none",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 2,
  },
  phoneScreen: {
    [theme.breakpoints.down("xs")]: {
      height: 137,
    },
    [theme.breakpoints.up("sm")]: {
      height: 197,
    },
    borderBottom: "none",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  toolbar: {
    display: "flex",
    width: "100%",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
}));

const Purchase = () => {
  const [color, setColor] = useState(null);
  const [capacity, setCapacity] = useState(-1);
  const classes = useStyles();
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Navbar title="nerve" page="Purchase" className={classes.navbar} />
      <Grid
        container
        className={classes.contentList}
        alignItems="center"
        justify="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item>
                <Typography variant="h3">Choose your color.</Typography>
              </Grid>
              <Grid item xs={12} className={classes.buttonGroup}>
                <ColorButton
                  border="#b7bdc7"
                  onClick={() => setColor(false)}
                  selected={!color}
                  preview="linear-gradient(150deg, #e0e0e0, #d0d1d1, #c1c2c3, #b2b3b4, #a3a4a6, #959698, #86888b, #787a7d, #6a6c70, #5d5f63, #505256, #43454a)"
                >
                  <Typography
                    variant="button"
                    component="span"
                    style={{ lineHeight: 0 }}
                  >
                    Ceramic White
                  </Typography>
                </ColorButton>
                <ColorButton
                  border="#1d1d29"
                  onClick={() => setColor(true)}
                  selected={color}
                  preview="linear-gradient(165deg, #473c16, #483416, #472d18, #43261b, #3e211d, #371d1f, #2e191f, #26161d, #1d141a, #150f16, #0c090f, #020203)"
                >
                  <Typography
                    variant="button"
                    component="span"
                    style={{ lineHeight: 0 }}
                  >
                    Dark Sunset
                  </Typography>
                </ColorButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Collapse in={color !== null || capacity !== -1}>
            <Grow in={color !== null || capacity !== -1}>
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item>
                    <Typography variant="h3">Pick a capacity.</Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.buttonGroup}>
                    <Button
                      color={capacity === 0 ? "primary" : "default"}
                      onClick={() => setCapacity(0)}
                    >
                      512 GiB
                    </Button>
                    <Button
                      color={capacity === 1 ? "primary" : "default"}
                      onClick={() => setCapacity(1)}
                    >
                      2 TiB
                    </Button>
                    <Button
                      color={capacity === 2 ? "primary" : "default"}
                      onClick={() => setCapacity(2)}
                    >
                      4 TiB
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grow>
          </Collapse>
        </Grid>
        <Grid item xs={12}>
          <Collapse in={capacity !== -1}>
            <Grow in={capacity !== -1}>
              <Paper className={classes.toolbar}>
                <Typography variant="h4">$2399 USD</Typography>
                <Button disabled variant="outlined">
                  Out of Stock
                </Button>
              </Paper>
            </Grow>
          </Collapse>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container direction="row" spacing={4}>
              <Grid item>
                <Typography style={{fontFamily: "'Fira Code', monospace"}}>
                  Copyright © NERVE, 2021. All rights reserved.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Purchase;
