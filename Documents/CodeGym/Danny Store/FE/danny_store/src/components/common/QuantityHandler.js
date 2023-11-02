import React, { useState } from 'react';

const QuantityHandler = ({ width, height, borderRadius }) => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };
    return (
        <>
            <div className='quantity-hanlder' style={{ width: `${width}`, height: `${height}`, borderRadius: `${borderRadius}` }}>
                <i class='bx bx-minus minus-icon' onClick={decreaseQuantity}></i>
                <span className='quantity-number'>{quantity}</span>
                <i class='bx bx-plus plus-icon' onClick={increaseQuantity}></i>
            </div>
        </>
    );
};

export default QuantityHandler;