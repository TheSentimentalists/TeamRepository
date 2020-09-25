import React from "react";
import { TextField, Button, Grid, Container } from "@material-ui/core";

function URLInput() {
  return (
    <div>
      <Grid container
      justify="center"
      alignItems="flex-start">
        <Grid item xs={10} md={8}>
        <TextField id="outlined-basic" label="Enter URL" variant="outlined" fullWidth   />
        </Grid>
      </Grid>
    </div>
  );
}

export default URLInput;
