import React from "react";
import {Typography, Container, Grid }from "@material-ui/core";


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
        <Typography variant="body2" text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro."></Typography>
        <Typography variant="body2"text="De carne lumbering animata corpora quaeritis."></Typography>
        <Typography variant="body2" text="Summus brains sit​​, morbo vel maleficia?"></Typography>
      
      </Grid>
      </Container>
    </div>
  );
}

export default Header;
