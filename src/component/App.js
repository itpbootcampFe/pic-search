import React from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import SeachBar from './SearchBar';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          <ImageIcon style={{ fontSize: 30, margin: 5 }} />
          React Pic Seach
        </Typography>
        <SeachBar />
      </Container>
    </>
  );
};

export default App;
