import React from 'react';
import Button from './ripple/Button';
import Ripple from './ripple/Ripple';

const Cart = () => {
    return (
        <>
            <div className='main-container'>
                <div className='cart-page-container'>
                    <div className='customer-form-container'>
                        <div className='customer-form-header'>
                            <p className='say-hi'>Hello, Tài Phát</p>
                            <p className='total-products'>Tổng số: 2 sản phẩm</p>
                        </div>
                        <div className='customer-form-row'>
                            <p className='cus-info'>Thông tin nhận hàng</p>
                            <a className='click-to-get-address-label'>
                                <i class='bx bxs-book-content book-icon'></i>
                                <p className='from-address-book'>Chọn từ sổ địa chỉ</p>
                            </a>
                        </div>
                        <div className='cart-main-form'>
                            <div className='form-first-row'>
                                <div className='full-name-form'>
                                    <input className='input-default' placeholder='Họ tên'></input>
                                </div>
                                <div className='phone-number-form'>
                                    <input className='input-default' placeholder='Số điện thoại'></input>
                                </div>
                            </div>
                            <div className='email-row'>
                                <input className='input-default' value='Taiphatlqd@gmail.com' disabled></input>
                            </div>
                            <div className='address-row'>
                                <input className='input-default' placeholder='Địa chỉ (Ví dụ: 18 Duy Tân, Hải Châu, Đà Nẵng)'></input>
                            </div>
                            <div className='note-row'>
                                <input className='input-default' placeholder='Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)'></input>
                            </div>
                            <div className='save-address'>
                                <label style={{ display: "flex", alignItems: "center", gap: "5px", marginLeft: "15px" }}>
                                    <input type='checkbox'></input>
                                    Lưu vào sổ địa chỉ để dùng cho lần mua tiếp theo</label>
                            </div>
                        </div>
                        <div className='payment-method-container'>
                            <p className='payment-method-title'>Hình thức thanh toán</p>
                            <div className='payment-method-list'>
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
                        </div>
                        <div className='submit-form'>
                            <Button className="button-with-ripple">
                                <a className=''>ĐỒ LÓT</a>
                                <Ripple color={"#fff"} duration={1000} />
                            </Button>
                        </div>
                    </div>
                    <div className='cart-container'></div>
                </div>
            </div>
        </>
    );
};

export default Cart;