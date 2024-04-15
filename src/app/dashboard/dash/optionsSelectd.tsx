'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { fontSize, fontWeight, height, width } from '@mui/system';

export default function OptionsSelector(): React.JSX.Element {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleOptionClick = (optionName) => {
    setSelectedOption(optionName);
  };

  return (
    <Box
      sx={{
        
        padding: '20px',
        width:'20vw',
        height:'50vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.5)',
        borderRadius: 5,
        backgroundColor: 'background.paper',
        '&:hover': {
          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <h1>Browse</h1>
      <Divider sx={{ mb: 2 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="body1"
          sx={{
            cursor: 'pointer',fontSize:'20px',
            fontWeight:'Medium',
            color: selectedOption === 'All Products' ? 'primary.main' : 'inherit',
            '&:hover': {
              
            },
          }}
          onClick={() => handleOptionClick('All Products')}
        >
        All Products
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize:'20px',
            fontWeight:'Medium',
            cursor: 'pointer',
            color: selectedOption === 'Shoes' ? 'primary.main' : 'inherit',
            '&:hover': {
             
            },
          }}
          onClick={() => handleOptionClick('Shoes')}
        >
          Shoes
        </Typography>
        <Typography
          variant="body1"
          sx={{
            cursor: 'pointer',fontSize:'20px',
            fontWeight:'Medium',
            color: selectedOption === 'Clothes' ? 'primary.main' : 'inherit',
            '&:hover': {
             
            },
          }}
          onClick={() => handleOptionClick('Clothes')}
        >
          Clothes
        </Typography>
        <Typography
          variant="body1"
          sx={{
            cursor: 'pointer',fontSize:'20px',
            fontWeight:'Medium',
            color: selectedOption === 'Hats' ? 'primary.main' : 'inherit',
            '&:hover': {
             
            },
          }}
          onClick={() => handleOptionClick('Hats')}
        >
          Hats
        </Typography>
        <Typography
          variant="body1"
          sx={{
            cursor: 'pointer',fontSize:'20px',
            fontWeight:'Medium',
            color: selectedOption === 'Watches' ? 'primary.main' : 'inherit',
            '&:hover': {
             
            },
          }}
          onClick={() => handleOptionClick('Watches')}
        >
          Watches
        </Typography>
        <Typography
          variant="body1"
          sx={{
            cursor: 'pointer',fontSize:'20px',
            fontWeight:'Medium',
            color: selectedOption === 'Accesories' ? 'primary.main' : 'inherit',
            '&:hover': {
             
            },
          }}
          onClick={() => handleOptionClick('Accesories')}
        >
          Accesories
        </Typography>
      </Box>
    
    </Box>
  );
}
