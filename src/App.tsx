import React from 'react';
import './App.css';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

// Import components section
import Add from './components/Add';

function App() {
  return (
    <Box sx={{ marginRight: "auto", marginLeft: "auto", width: "80%" }}>
      <Typography variant='h2' sx={{ textAlign: "center", marginTop: "30px" }}>TodoList</Typography>
      
      <Add />
    </Box>
  );
}

export default App;
