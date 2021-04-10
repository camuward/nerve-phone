import Head from "next/head";

import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../src/Navbar";

export default function Home() {
  return (
    <Box>
      <Navbar title="nerve" />
    </Box>
  );
}
