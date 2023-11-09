import React, { useEffect, useState } from 'react';

const QuantityHandler = ({ width, height, borderRadius, mainQuantity, fontSize }) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        mainQuantity = quantity;
    }, [quantity])

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
                <i class='bx bx-minus minus-icon' style={{ fontSize: `${fontSize}` }} onClick={decreaseQuantity}></i>
                <span className='quantity-number' style={{ fontSize: `${fontSize}` }}>{quantity}</span>
                <i class='bx bx-plus plus-icon' style={{ fontSize: `${fontSize}` }} onClick={increaseQuantity}></i>
            </div>
        </>
    );
};

export default QuantityHandler;