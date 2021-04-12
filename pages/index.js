import { forwardRef, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import withWidth from "@material-ui/core/withWidth";

import Navbar from "../src/Navbar";
import styles from "../styles/Overview.module.css";
import { NoSsr } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  navbar: {
    marginTop: theme.spacing(2),
    borderRadius: 4,
    background: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
  },
  hero: {
    padding: theme.spacing(2),
    height: 200,
  },
  card: {
    height: 200,
    position: "relative",
    zIndex: 0,
  },
  cardButton: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "100%",
  },
  cardImage: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    height: 200,
    backgroundSize: "cover",
  },
  cardBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: "#000",
    opacity: 0.4,
    zIndex: 1,
    transition: "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  cardBackdropHide: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0,
    zIndex: 1,
    transition: "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  cardText: {
    zIndex: 2,
    color: "white",
    background: "transparent",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    transition: "background 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  cardTextHighlight: {
    zIndex: 2,
    background: "black",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    transition: "background 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  contentList: {
    marginTop: theme.spacing(8),
    flexGrow: 1,
  },
  xsEmphasisText: {
    textAlign: "right",
  },
  phoneBody: {
    position: "absolute",
    width: 200,
    height: 200,
    transform: "translateY(-30%)",
    backgroundColor: theme.palette.secondary.light,
    borderBottom: "none",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 2,
  },
  phoneScreen: {
    height: 197,
    borderBottom: "none",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
}));

const LinkCard = forwardRef(
  ({ title, backgroundImage, backgroundColor, onClick, ...props }, ref) => {
    const classes = useStyles();
    const [hover, setHover] = useState(false);
    return (
      <Card
        className={classes.card}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...props}
      >
        <ButtonBase
          focusRipple
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
          onClick={onClick}
          ref={ref}
          className={classes.cardButton}
        >
          <span
            className={classes.cardImage}
            {...(backgroundImage
              ? { style: { backgroundImage: backgroundImage } }
              : backgroundColor
              ? { style: { background: backgroundColor } }
              : {})}
          />
          <span
            className={hover ? classes.cardBackdropHide : classes.cardBackdrop}
          />
          <span className={classes.cardText}>
            <Typography
              variant="h4"
              component="span"
              className={hover ? classes.cardTextHighlight : classes.cardText}
            >
              {title}
            </Typography>
          </span>
        </ButtonBase>
      </Card>
    );
  }
);

const Home = () => {
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
        <Grid item xs={12}>
          <Paper className={classes.hero}>
            <Grid container direction="row" spacing={4} justify="space-evenly">
              <Grid item xs={6} sm={4} md={4}>
                <Box display="flex" justifyContent="center" position="relative">
                  <Paper variant="outlined" className={classes.phoneBody}>
                    <Paper variant="outlined" className={classes.phoneScreen} />
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={5} sm={6} md={5}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="h4" component="h2">
                      <span className={styles.emphasisTextFirst}>
                        {"Elegance."}
                      </span>{" "}
                      <span className={styles.emphasisTextSecond}>
                        {"Redefined."}
                      </span>
                    </Typography>
                  </Grid>
                  <NoSsr>
                    <Hidden xsDown>
                      <Grid item>
                        <Typography variant="body1">
                          Built from the ground up with a mod&shy;ern,
                          min&shy;im&shy;al&shy;is&shy;tic sty&shy;le.
                        </Typography>
                      </Grid>
                    </Hidden>
                  </NoSsr>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <NoSsr>
          <Hidden smUp>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h5" component="span">
                  Built from the ground up with a mod&shy;ern,
                  min&shy;im&shy;al&shy;is&shy;tic sty&shy;le.
                </Typography>
              </Paper>
            </Grid>
          </Hidden>
        </NoSsr>
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

export default Home;
