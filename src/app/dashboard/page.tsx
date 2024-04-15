import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { LatestProducts } from '@/components/dashboard/overview/latest-products';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import OptionsSelector from './dash/optionsSelectd';
import Products from '../products/[[...slug]]/pageProducts';
export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center", marginBottom:'3vh',paddingInline:'5vw'}}>
        <h1>Product Catalog</h1>
      
        <Box >
          <Button
            color="primary"
          
            size="small"
            variant="contained"
          >
            Go to car
          </Button>
        </Box>
      </div>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <TextField
      placeholder="Search..."
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: 'action.active' }} />
          </InputAdornment>
        ),
        sx: { borderRadius: '20px', width: '50vw' }, // Establecer el borde redondeado y el ancho
      }}
    />
  </Box>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'2vh'}}>
        <OptionsSelector/>
        <Products params={{}}/>
    
        
        </div>
    </>
  
  );
}
