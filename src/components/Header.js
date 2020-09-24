import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

function Header() {
  return (
    <div>
      <Container max-width="md">
        <Grid item xs={12}>
        <Typography variant="h3">The Sentimentalists</Typography>
        <Typography variant="h5">Analysing Sentiment Since 2020</Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
