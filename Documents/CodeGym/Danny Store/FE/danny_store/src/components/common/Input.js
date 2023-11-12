import React from 'react';

const Input = () => {
    return (
        <div className=''>
            <label class="payment-method-template payment-method-template-default">
                <input type="radio" name="radio" className='radio-pick' />
                <div style={{ minWidth: "150px" }}>
                    <i class='bx bxs-truck truck-icon' ></i>
                </div>
                <span class="payment-method-name">COD - Thanh toán khi nhận hàng</span>
            </label>
            <label class="payment-method-template">
                <input type="radio" checked name="radio" className='radio-pick' />
                <div style={{ minWidth: "150px" }}>
                    <img className='payment-method-avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png' />
                </div>
                <span class="payment-method-name">Thanh toán Paypal</span>
            </label>
        </div>
    );
};

export default Input;