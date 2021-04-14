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
    padding: theme.spacing(2),
    minHeight: 200,
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
      ...props
    },
    ref
  ) => {
    const classes = useStyles();
    const paper = (
      <Paper className={classes.hero} ref={ref} {...props}>
        <Grid
          container
          direction={rtl ? "row-reverse" : "row"}
          spacing={4}
          justify="space-evenly"
        >
          <Grid item xs={6} sm={4} md={4}>
            <Grid
              container
              xs={12}
              direction="column"
              justify="center"
              alignItems="center"
              className={noCentering ? undefined : classes.children}
            >
              {children}
            </Grid>
          </Grid>
          <Grid item xs={5} sm={6} md={5}>
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
