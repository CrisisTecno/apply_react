'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Portal from '@mui/material/Portal';
import Cart from '../products/[[...slug]]/cart';
import { useCart } from '../hooks/context';
import Summary from '../products/[[...slug]]/sumary';
export default function CartButton () {
  const [showPortal, setShowPortal] = React.useState(false);
  const { cart } = useCart();
  return (
    <>
      <Button
        color="primary"
        size="small"
        variant="contained"
        onClick={() => setShowPortal(true)}
      >
        Go to cart
      </Button>
      {showPortal && (
        <Portal>
          <div style={{ position: 'fixed', top: 0, left: 0,
           width: '100%', height: '100%',
            backgroundColor: '#fff', zIndex: 1000, display: 'flex',flexDirection:'column',
             justifyContent: 'center',
             alignItems: 'center' }}>
             <div style={{ display: 'flex',flexDirection:'row',justifyContent: 'space-between',}}>
                <h1> Shopping Cart
                </h1>
                <div style={{ marginLeft: '30vw' }}>
                <h1>{cart.length} items</h1>
              </div>
             </div>
             <div style={{ display: 'flex',flexDirection:'row',justifyContent: 'space-between',}}>
                <Cart/>
                <Summary/>
             </div>
            
            <Button onClick={() => setShowPortal(false)}> Continuar con las compras</Button>
          </div>
        </Portal>
      )}
    </>
  );
};
