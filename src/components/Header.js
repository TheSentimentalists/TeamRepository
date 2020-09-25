import React from "react";
import {Typography, Container, Grid }from "@material-ui/core";
import Text from "./components/Text";



function Header() {
  return (
    <div>
      <Container max-width="lg">
        <Grid container
        direction="column"
        justify="center"
        alignItems="center"
        item xs={12}>
        <Typography variant="h3">The Sentimentalists</Typography>
        <Typography variant="h5">Analysing Sentiment Since 2020</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Text></Text>
      
      </Grid>
      </Container>
    </div>
  );
}

export default Header;
