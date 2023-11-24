import React, { useEffect, useState } from 'react';

const QuantityHandler = ({ number, width, height, borderRadius, fontSize, max, onData }) => {
    const [quantity, setQuantity] = useState(number);

    useEffect(() => {
        onData(quantity);
    }, [quantity])

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        if (quantity < max) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <>
            <div className='quantity-hanlder' style={{ width: `${width}`, height: `${height}`, borderRadius: `${borderRadius}` }}>
                <i className='bx bx-minus minus-icon' style={{ fontSize: `${fontSize}`, color: quantity == 1 ? "rgb(136 136 136 / 36%)" : 'black' }} onClick={decreaseQuantity}></i>
                <span className='quantity-number' style={{ fontSize: `${fontSize}` }}>{quantity}</span>
                <i className='bx bx-plus plus-icon' style={{ fontSize: `${fontSize}`, color: quantity == max ? "rgb(136 136 136 / 36%)" : 'black' }} onClick={increaseQuantity}></i>
            </div>
        </>
    );
};

export default QuantityHandler;