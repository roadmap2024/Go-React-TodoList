import React from 'react';
import './App.css';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

// Import components section
import Add from './components/Add';
import TodoTable from './components/Table';

function App() {
  return (
    <Box sx={{ marginRight: "auto", marginLeft: "auto", width: "80%" }}>
      <Typography variant='h2' sx={{ textAlign: "center", marginTop: "30px" }}>TodoList</Typography>
      
      <Add />
      <TodoTable />
    </Box>
  );
}

export default App;