import Head from "next/head";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Navbar from "../src/Navbar";

const useStyles = makeStyles(theme => {

})

export default function Home() {
  const classes = useStyles();

  return (
    <Box>
      <Navbar title="nerve" page="Overview" />
    </Box>
  );
}
