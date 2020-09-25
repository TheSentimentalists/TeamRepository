import React, { useState  } from "react";//State must as always be imported to the parent storing the state
import {Typography, Container, Grid }from "@material-ui/core";
import DisplayText from "../components/DisplayText";
/*Store state in parent always! App passes the data to children*/


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
  <DisplayText></DisplayText>
      
      </Grid>
      </Container>
    </div>
  );
}

export default Header;
