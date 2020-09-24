import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function Header() {
  return (
    <div>
      <Container max-width="sm">
        <Typography variant="h3">The Sentimentalists</Typography>
        <Typography variant="h5">Analysing Sentiment Since 2020</Typography>
      </Container>
    </div>
  );
}

export default Header;
