import React from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          <ImageIcon style={{ fontSize: 30, margin: 5 }} />
          React Pic Seach
        </Typography>
      </Container>
    </>
  );
};

export default App;
