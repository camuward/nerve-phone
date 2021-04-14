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
import FlashOnRounded from "@material-ui/icons/FlashOnRounded";
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

const Speed = () => {
  const [color, setColor] = useState(true);
  const classes = useStyles();
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Navbar title="nerve" page="Performance" className={classes.navbar} />

      <Grid
        container
        className={classes.contentList}
        alignItems="center"
        justify="center"
        spacing={3}
      >
        <Hero
          primary={
            <Typography variant="h4" component="h2">
              As quick as a flash.
            </Typography>
          }
          secondary={
            <Typography variant="body1">
              In both real-world and synthetic benchmarks, the{" "}
              <span style={{ fontFamily: "'Fira Code', monospace" }}>
                nerve
              </span>{" "}
              consistently dominates the competition. With a 24-core processor,
              12GB RAM, and NVIDIA ray acceleration, this device is bound to
              provide the best experience there is.
            </Typography>
          }
        >
          <Typography variant="h1" component="span">
            <FlashOnRounded fontSize="inherit" />
          </Typography>
        </Hero>
        <Hero
          rtl
          primary={
            <Typography variant="h4" component="h2" className={classes.invert}>
              <span
                style={{ color: "white", backgroundColor: "rgba(0,0,0,0.6)", lineHeight: "1.6em", padding: "0.15em 0" }}
              >
                Powerful, from silicon to screen.
              </span>
            </Typography>
          }
          secondary={
            <Typography variant="body1" className={classes.invert}>
              <span
                style={{ color: "white", backgroundColor: "rgba(0,0,0,0.6)", padding: "0.15em 0" }}
              >
                The{" "}
                <span style={{ fontFamily: "'Fira Code', monospace" }}>
                  nerve
                </span>
                , with its custom RISC-V SoC running on a revolutionary new 2nm
                transistor node, is capable of reaching 6 GHz sustained loads as
                long as it stays cool. So we took care of that by including a
                16-heatpipe cooling system easily capable of dissipating the
                device's 440 W heat output.
              </span>
            </Typography>
          }
          pxs={4}
          sxs={7}
          background="url('https://cdn.gamer-network.net/2020/usgamer/Horizon-Zero-Dawn-PC-Press-Screenshot-1-08062020.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/horizon-zero-dawn-pc-impressions.jpg') no-repeat 80% 70%"
          backgroundDim
          backgroundCover
        ></Hero>

        <Grid item xs={12}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6} sm={4} md={3}>
              <LinkCard
                title="Design"
                backgroundImage="url('/design-card.jpg')"
                onClick={() => router.push("/design")}
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

export default Speed;
