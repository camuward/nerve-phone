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
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import NoSsr from "@material-ui/core/NoSsr";
import withWidth from "@material-ui/core/withWidth";

import Navbar from "../src/Navbar";
import LinkCard from "../src/LinkCard";
import Hero from "../src/Hero";
import ColorButton from "../src/ColorButton";

import { DarkTheme, LightTheme } from "../src/theme";

const useStyles = makeStyles(theme => ({
  navbar: {
    marginTop: theme.spacing(2),
    borderRadius: 4,
    background: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
  },
  contentList: {
    marginTop: theme.spacing(8),
    flexGrow: 1,
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
}));

const Design = () => {
  const [color, setColor] = useState(true);
  const classes = useStyles();
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Navbar title="nerve" page="Overview" className={classes.navbar} />

      <Grid
        container
        className={classes.contentList}
        alignItems="center"
        justify="center"
        spacing={2}
      >
        <Hero
          rtl
          noCentering
          primary={
            <Typography variant="h4" component="h2">
              Looks that could kill.
            </Typography>
          }
          secondary={
            <Typography variant="body1">
              With a beautiful minimalistic design, the{" "}
              <span style={{ fontFamily: "'Fira Code', monospace" }}>
                nerve
              </span>{" "}
              features a unique look like no other.
            </Typography>
          }
        >
          <Box display="flex" justifyContent="center" position="relative">
            <Paper
              variant="outlined"
              className={classes.phoneBody}
              style={{ background: "#fff" }}
            >
              <Paper
                className={classes.phoneScreen}
                elevation={0}
                style={{
                  background:
                    "linear-gradient(165deg, #cab800, #dda010, #e7892e, #e87546, #e1645a, #d1596c, #ba5479, #9f5280, #825181, #654f7c, #4b4b70)",
                }}
              ></Paper>
            </Paper>
          </Box>
        </Hero>
        <Hero
          primary={
            <Typography variant="h4" component="h2">
              Two distinct colors.
            </Typography>
          }
          secondary={
            <Typography variant="body1">
              While designing the device with our perfectly calibrated
              professional design tools, we realized our device would not reach
              peak elegance if you couldn't pick your favorite color. So we also
              made one in black.
            </Typography>
          }
          theme={color ? DarkTheme : LightTheme}
        >
          <ColorButton
            border="#b7bdc7"
            onClick={() => setColor(false)}
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
        </Hero>

        <Grid item xs={12}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6} sm={4} md={3}>
              <LinkCard
                title="Speed"
                backgroundImage="url('/performance-card.jpg')"
                onClick={() => router.push("/")}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <LinkCard
                title="Specs"
                backgroundImage="url('/specs-card.jpg')"
                onClick={() => router.push("/")}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <LinkCard
                title="Buy"
                backgroundColor="linear-gradient(165deg, #29ff94, #05ffa3, #00ffb1, #00ffbe, #00ffca, #00ffd5, #00ffdf, #1cffe8)"
                onClick={() => router.push("/")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container direction="row" spacing={4}>
              <Grid item>
                <Typography>
                  Copyright © Synapse, 2033. All rights reserved.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Design;
