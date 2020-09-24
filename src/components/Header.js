import React from "react";
import {Typography, Container, Grid }from "@material-ui/core";


function Header() {
  return (
    <div>
      <Container max-width="lg">
        <Grid item xs={12}>
        <Typography variant="h3">The Sentimentalists</Typography>
        <Typography variant="h5">Analysing Sentiment Since 2020</Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
