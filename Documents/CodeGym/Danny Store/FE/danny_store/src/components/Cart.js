import React from 'react';
import Button from './ripple/Button';
import Ripple from './ripple/Ripple';
import QuantityHandler from './common/QuantityHandler';

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
                                <label style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: '0.9vw', marginLeft: "15px" }}>
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
                            <a className='click-pay'>Thanh toán</a>
                        </div>
                    </div>
                    <div className='cart-container'>
                        <div className='cart-items-container'>
                            <div className='cart-header'>
                                <i class='bx bx-cart-alt cart-icon-plus' ></i>
                                <p className='cart-title'>Giỏ hàng</p>
                            </div>
                            <div className='cart-item-card'>
                                <div className='cart-card-avatar-container'>
                                    <img className='cart-card-avatar' src='https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/August2022/Polo_v2_navy_1234.jpg' />
                                </div>
                                <div className='cart-card-content'>
                                    <div className='cart-card-name-n-size-n-color-info'>
                                        <p className='cart-card-name'>Polo thể thao V2</p>
                                        <div className='color-n-size-info'>
                                            <span>Xám </span>/<span> size M</span>
                                        </div>
                                        <p className='color-n-size-info'>Số lượng: 1</p>

                                    </div>
                                    <div className='color-n-size-dropdown'>
                                        <select className='dropdown-custome' id='color-dropdown'>
                                            <option value="">Xám</option>
                                            <option value="">Đen</option>
                                            <option value="">Trắng</option>
                                        </select>
                                        <select className='dropdown-custome' id='color-dropdown'>
                                            <option value="">S</option>
                                            <option value="">M</option>
                                            <option value="">L</option>
                                            <option value="">XL</option>
                                        </select>
                                    </div>
                                    <div className='quantity-handler-n-price-container'>
                                        <QuantityHandler width='5vw' height='3vh' fontSize='0.8vw' borderRadius='5px' />
                                        <div className='cart-card-item-price-container'>
                                            <p className='item-price'>159.000đ</p>
                                            <p className='line-through-item-price'>189.000đ</p>
                                        </div>
                                    </div>
                                </div>
                                <i class='bx bx-x delete-icon' ></i>
                            </div>
                            <div className='cart-item-card'>
                                <div className='cart-card-avatar-container'>
                                    <img className='cart-card-avatar' src='https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/CM006.thumb1.2_74.jpg' />
                                </div>
                                <div className='cart-card-content'>
                                    <div className='cart-card-name-n-size-n-color-info'>
                                        <p className='cart-card-name'>Áo khoác gió V3</p>
                                        <div className='color-n-size-info'>
                                            <span>Xám </span>/<span> size M</span>
                                        </div>
                                        <p className='color-n-size-info'>Số lượng: 1</p>

                                    </div>
                                    <div className='color-n-size-dropdown'>
                                        <select className='dropdown-custome' id='color-dropdown'>
                                            <option value="">Xám</option>
                                            <option value="">Đen</option>
                                            <option value="">Trắng</option>
                                        </select>
                                        <select className='dropdown-custome' id='color-dropdown'>
                                            <option value="">S</option>
                                            <option value="">M</option>
                                            <option value="">L</option>
                                            <option value="">XL</option>
                                        </select>
                                    </div>
                                    <div className='quantity-handler-n-price-container'>
                                        <QuantityHandler width='5vw' height='3vh' fontSize='0.8vw' borderRadius='5px' />
                                        <div className='cart-card-item-price-container'>
                                            <p className='item-price'>159.000đ</p>
                                            <p className='line-through-item-price'>189.000đ</p>
                                        </div>
                                    </div>
                                </div>
                                <i class='bx bx-x delete-icon' ></i>
                            </div>
                            <div className='receipt-info-container'>
                                <div className='voucher-container'>
                                    <input className='voucher-input' placeholder='Nhập mã giảm giá'></input>
                                    <div className='apply-voucher'>Áp dụng</div>
                                </div>
                                <div className='receipt-body'>
                                    <div className='receipt-row'>
                                        <p>Tạm tính</p>
                                        <p>618.000đ</p>
                                    </div>
                                    <div className='receipt-row'>
                                        <p>Giảm giá</p>
                                        <p>0đ</p>
                                    </div>
                                    <div className='receipt-row'>
                                        <p>Phí giao hàng</p>
                                        <p>Miễn phí</p>
                                    </div>
                                </div>
                                <div className='receipt-total-money-container'>
                                    <div className='receipt-row'>
                                        <p>Tổng tiền</p>
                                        <p className='receipt-total-money'>618.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;