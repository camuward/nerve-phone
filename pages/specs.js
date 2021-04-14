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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

const phones = {
  NERVE: {
    name: "Nerve",
    processor: {
      cores: "24 cores (8 performance, 2 low-power, 16 neural)",
      node: "2nm"
    },
    display: {
      tech: "HDR10+ VRR smoothLink AMOLED",
      size: '6.9"',
      resolution: "3800x1800 @ up to 240 Hz",
    },
    memory: "24 GiB LPDDR5",
    capacity: "512 GiB / 2 TiB / 4 TiB",
    battery: "8400 mAh"
  },
  IPHONE: {
    name: "iPhone 12 Pro",
    processor: {
      cores: "6 cores (2 performance, 4 low-power, 16 neural)",
      node: "5nm"
    },
    display: {
      tech: "Super Retina XDR OLED",
      size: '6.1" / 6.7"',
      resolution: "2532x1170 / 2778x1284 @ 60 Hz",
    },
    memory: "6 GiB LPDDR4X-4266",
    capacity: "128 GiB / 256 GiB / 512 GiB",
    battery: "3678 mAh"
  },
  SAMSUNG: {
    name: "Galaxy S21 Ultra 5G",
    processor: {
      cores: "8 cores",
      node: "5nm"
    },
    display: {
      tech: "Quad HD+ Dynamic AMOLED 2X",
      size: '6.8"',
      resolution: "3200x1440 @ 120 Hz",
    },
    memory: "12 / 16 GiB LPDDR5",
    capacity: "128 GiB / 256 GiB / 512 GiB",
    battery: "5000 mAh"
  },
};

const Specs = () => {
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
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell>{val.name}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Display</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell>{val.display.tech}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Screen size</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell>{val.display.size}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Resolution</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell>{val.display.resolution}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Processor</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell>{val.processor.cores}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Process Node</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell>{val.processor.node}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Memory</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell>{val.memory}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Storage</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell>{val.capacity}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Battery</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell>{val.battery}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

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
                onClick={() => router.push("/speed")}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <LinkCard
                title="Buy"
                backgroundColor="linear-gradient(165deg, #29ff94, #05ffa3, #00ffb1, #00ffbe, #00ffca, #00ffd5, #00ffdf, #1cffe8)"
                onClick={() => router.push("/purchase")}
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

export default Specs;
