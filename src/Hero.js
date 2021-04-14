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

const useStyles = makeStyles(theme => ({
  hero: {
    position: "relative",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      minHeight: 140,
    },
    [theme.breakpoints.up("sm")]: {
      minHeight: 200,
    },
    zIndex: -3
  },
  background: {
    borderRadius: theme.shape.borderRadius,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -2
  },
  backgroundDim: {
    borderRadius: theme.shape.borderRadius,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  },
  children: {
    gap: theme.spacing(4),
    height: "100%",
  },
  extension: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Hero = forwardRef(
  (
    {
      primary,
      secondary,
      children,
      noExpand,
      rtl,
      noCentering,
      theme,
      pxs,
      sxs,
      background,
      backgroundDim,
      backgroundDimAmount,
      backgroundCover,
      ...props
    },
    ref
  ) => {
    const classes = useStyles();
    const paper = (
      <Paper className={classes.hero} ref={ref} {...props}>
        {background && (
          <span
            className={classes.background}
            style={{
              background: background,
              backgroundSize: backgroundCover ? "cover" : "initial",
            }}
          />
        )}
                {backgroundDim && (
          <span
            className={classes.backgroundDim}
            style={{
              background: "#000",
              opacity: backgroundDimAmount || 0.4
            }}
          />
        )}
        <Grid
          container
          direction={rtl ? "row-reverse" : "row"}
          spacing={2}
          justify="space-evenly"
          wrap="nowrap"
        >
          <Grid item xs={pxs ?? 6} sm={4} md={4}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={noCentering ? undefined : classes.children}
            >
              {children}
            </Grid>
          </Grid>
          <Grid item xs={sxs ?? 6} sm={6} md={5}>
            <Grid container direction="column" spacing={4}>
              <Grid item>{primary}</Grid>
              <NoSsr>
                <Hidden xsDown>
                  <Grid item>{secondary}</Grid>
                </Hidden>
              </NoSsr>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
    return (
      <>
        <Grid item xs={12}>
          {theme ? <ThemeProvider theme={theme}>{paper}</ThemeProvider> : paper}
        </Grid>
        {!noExpand && (
          <NoSsr>
            <Hidden smUp>
              <Grid item xs={12}>
                <Paper className={classes.extension}>{secondary}</Paper>
              </Grid>
            </Hidden>
          </NoSsr>
        )}
      </>
    );
  }
);

export default Hero;
