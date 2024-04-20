import React, { useState } from 'react';
import { useCart } from '../../hooks/context';
import { Product } from "@/API";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Summary() {
    const { cart } = useCart();
    const [discountCode, setDiscountCode] = useState('');
    const [rows, setRows] = useState<Product[]>([]);
    let total = 0;

    for (const item of cart) {
        total += item.price;
    }

    const handleContinue = () => {
        // Aquí puedes agregar la lógica para aplicar el código de descuento
        console.log('Código de descuento:', discountCode);
        console.log('Total:', total.toFixed(2));
        // Lógica para aplicar el descuento al total si corresponde
    }

    const handleDiscountCodeChange = (event) => {
        setDiscountCode(event.target.value);
    }

    return (
        <div style={{ padding: '50px', backgroundColor: '#f3f3f2', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px 0', marginLeft: '2vw' }}>
            <h1>Order Summary</h1>
            
            <h1>Code</h1>
            <TextField
                label="Discount Code"
                variant="outlined"
                value={discountCode}
                onChange={handleDiscountCodeChange}
                style={{ marginBottom: '30px', width: '100%' }}
            />
            <Button
                color="primary"
                size="medium"
                variant="contained"
                onClick={handleContinue}
            >
                APPLY
            </Button>
            <h1>Total: ${total.toFixed(2)}</h1>
            <Button
                color="primary"
                size="large"
                variant="contained"
                onClick={handleContinue}
            >
                Continue
            </Button>
        </div>
    );
}
