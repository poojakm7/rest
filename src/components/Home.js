import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './Home.css';
import { useState } from 'react';

function Home() {
  const [value, setValue] = React.useState(2);
  return (
    <div>
    <Box>
      <h1>Welcome to Our Store</h1>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
     <div style={{height:'500px',width:'600px',backgroundImage:''}}> 
     </div>
     </Box>
      </div>
  );
}

export default Home;