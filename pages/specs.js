import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Navbar from "../src/Navbar";
import LinkCard from "../src/LinkCard";

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
}));

const phones = {
  NERVE: {
    name: "Nerve",
    processor: {
      cores: "24 cores (8 performance, 2 low-power, 16 neural)",
      node: "2nm",
    },
    display: {
      tech: "HDR10+ VRR smoothLink AMOLED",
      size: '6.9"',
      resolution: "3800x1800 @ up to 240 Hz",
    },
    memory: "24 GiB LPDDR5",
    capacity: "512 GiB / 2 TiB / 4 TiB",
    battery: "8400 mAh",
  },
  IPHONE: {
    name: "iPhone 12 Pro",
    processor: {
      cores: "22 cores (2 performance, 4 low-power, 16 neural)",
      node: "5nm",
    },
    display: {
      tech: "Super Retina XDR OLED",
      size: '6.1" / 6.7"',
      resolution: "2532x1170 / 2778x1284 @ 60 Hz",
    },
    memory: "6 GiB LPDDR4X-4266",
    capacity: "128 GiB / 256 GiB / 512 GiB",
    battery: "3678 mAh",
  },
  SAMSUNG: {
    name: "Galaxy S21 Ultra 5G",
    processor: {
      cores: "8 cores",
      node: "5nm",
    },
    display: {
      tech: "Quad HD+ Dynamic AMOLED 2X",
      size: '6.8"',
      resolution: "3200x1440 @ 120 Hz",
    },
    memory: "12 / 16 GiB LPDDR5",
    capacity: "128 GiB / 256 GiB / 512 GiB",
    battery: "5000 mAh",
  },
};

const Specs = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Navbar title="nerve" page="Specs" className={classes.navbar} />
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
                    <TableCell key={key}>{val.name}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Display</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell key={key}>{val.display.tech}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Screen size</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell key={key}>{val.display.size}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Resolution</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell key={key}>{val.display.resolution}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Processor</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell key={key}>{val.processor.cores}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Process Node</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell key={key}>{val.processor.node}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Memory</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell key={key}>{val.memory}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Storage</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell key={key}>{val.capacity}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Battery</TableCell>
                  {Object.entries(phones).map(([key, val]) => (
                    <TableCell key={key}>{val.battery}</TableCell>
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

export default Specs;
