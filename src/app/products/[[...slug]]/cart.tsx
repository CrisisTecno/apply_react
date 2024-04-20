
"use client";
import Link from 'next/link';
import { useCart } from '../../hooks/context';
import Grid from '@mui/material/Unstable_Grid2';

import { useEffect, useState } from "react";
import { GetCategoryByNameQuery, Category } from "@/API";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Product } from "@/API";
import Paper from '@mui/material/Paper';



function ProductListItem({ row, cart }: { row: Productsx, cart: CartItem[] }) {
  const [quantity, setQuantity] = useState<number>(1);
  const totalPrice = row.price * row.quantity;
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <img
          src={row.url}
          width="128px"
          height="128px"
          style={{ objectFit: 'contain', width: '128px', marginRight: '20px' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%'  ,marginLeft: '2vw' }}>
          <div style={{ marginBottom: '10px' }}>
            <h2>{row.name}</h2>
            <p>Price: ${row.price}</p>
            <p>MSRP: ${row.msrp}</p>
          </div>
          
        </div>
        <div style={{ display: 'flex', alignItems: 'center ',marginLeft: '2vw'  }}>
            <button onClick={handleDecrement}>-</button>
            <div  style={{marginRight: '20px' }}> </div>
          
       
            <h1>{row.quantity}</h1>
            <div  style={{marginLeft: '20px' }}> </div>
            <button onClick={handleIncrement}>+</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' ,marginLeft: '5vw' }}>
         
            
            <h1>${row.price}</h1>
          
          
        </div>
          <div style={{ display: 'flex', flexDirection: 'column' ,marginLeft: '5vw' }}>
         
            
          <h1>${totalPrice}</h1>
          
          
        </div>

      </div>
    </div>
  );
}


function ProductList({ category }: { category: string }) {
    const { cart } = useCart();
	const [rows, setRows] = useState<Product[]>([]);
    useEffect(() => {
        const updatedRows: Product[] = [];
    
        for (const item of cart) {
            const existingItem = updatedRows.find((row) => row.id === item.id);
    
            if (existingItem) {
                // Si el producto ya existe en updatedRows, incrementamos su cantidad
                existingItem.quantity += 1;
            } else {
                // Si no existe, lo agregamos con su cantidad
                updatedRows.push({ ...item, quantity: 1 });
            }
        }
    
        setRows(updatedRows);
    
        console.log("Actualizado rows:", updatedRows);
        console.log("Carrito actualizado:", cart);
    }, [cart]);
    
	return (
        <Paper sx={{ width: '100%' }}>
        <div style={{ margin: '30px' }}>
          {rows.map((row) => (
            <div key={row.id} style={{ marginBottom: '20px' }}>
              <ProductListItem row={row} />
            </div>
          ))}
        </div>
      </Paper>

	);
}

export function CartContent() {
  const { cart } = useCart();
  return ( 
    <>
     
      {cart.length === 0 ? (
        <p>Your cart is empty! Buy some <Link href="/products">stuff</Link>!</p>
      ) : (
          <Grid container direction="column">
             
              <ProductList category="All" />
            </Grid>
        
      )}
    </>
  );
}

function CartLoading() {
  return (<div>Loading cart...</div>);
}

export default function Cart() {

  return <CartContent />;
}
