import React from 'react';
import { TextField, Button, Grid, Container } from '@material-ui/core'

function URLInput() {
  return (
    <Container maxWidth="md">
    <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField id="outlined-basic" label="Input URL..." variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
                <Button variant="contained" color="primary">Analyze</Button>
            </Grid>
    </Grid>
    </Container>
   
  );
}

export default URLInput;
