import React from "react";
import { TextField, Button, Grid, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function URLInput() {
  return (
    <Container maxWidth="md">
      <Grid
        direction="row"
        alignItems="flex-start"
        justify="center"
        item
        xs={12}
        md={12}
      >
        <Typography variant="body2">
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
          De carne lumbering animata corpora quaeritis. Summus brains sit​​,
          morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum
          mauris.{" "}
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Input URL..."
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" color="primary">
            Analyze
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default URLInput;
