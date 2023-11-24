import React, { useEffect, useState } from 'react';

import Footer from '../common/Footer';
import Header from '../common/Header';
import MiniCard from '../common/MiniCard';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CART_LIST } from '../cart/redux/Action';
import SkeletonMiniCard from '../common/SkeletonMiniCard';
import Paypal from './Paypal';
import { getAppUserByUserName, updateUserInfo, userConverterFromToken } from '../../service/AuthService';
import { Field, Formik, Form } from 'formik';



const Cart = () => {
    const products = useSelector(state => state.cartList);
    const dispatch = useDispatch();
    let totalMoney = useSelector(state => state.totalMoney);
    const [discount, setDiscount] = useState(0);
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [checkout, setCheckout] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        dispatch({ type: GET_CART_LIST })
        getUserInfo();
    }, [])

    useEffect(() => {
        handleScrollToTop();
        setShowSkeleton(true);
        const timeoutId = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [products])



    const getUserInfo = async () => {
        const username = userConverterFromToken().sub;
        const obj = await getAppUserByUserName(username);
        setUser(obj);
    }

    const handleScrollToTop = () => {
        const targetDiv = document.getElementById('top-on-cart');
        if (targetDiv) {
            const targetOffset = targetDiv.offsetTop - 100;
            window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        }
    };

    const handleSubmit = async (value) => {
        setCheckout(true);
        await updateUserInfo(value);
    }

    return (
        <>
            <Header cart={products.length} />
            <div className='main-container' id='top-on-cart'>
                <div className='cart-page-container'>
                    <div className='customer-form-container'>
                        {user &&
                            <Formik initialValues={{
                                id: user?.id,
                                name: user?.name,
                                phone: user?.phone,
                                username: user?.username,
                                address: user?.address
                            }}
                                onSubmit={(value) => {
                                    console.log(value);
                                    handleSubmit(value);
                                }}
                            >
                                <Form>
                                    <div className='customer-form-header'>
                                        <p className='say-hi'>Hello, Tài Phát</p>
                                        <p className='total-products'>Tổng số: {products.length} sản phẩm</p>
                                    </div>
                                    <div className='customer-form-row'>
                                        <p className='cus-info'>Thông tin nhận hàng</p>
                                        <a className='click-to-get-address-label'>
                                            <i className='bx bxs-book-content book-icon'></i>
                                            <p className='from-address-book'>Chọn từ sổ địa chỉ</p>
                                        </a>
                                    </div>
                                    <div className='cart-main-form'>



                                        <div className='form-first-row'>
                                            <div className='full-name-form'>
                                                <Field className='input-default' name="name" placeholder='Họ tên' />
                                            </div>
                                            <div className='phone-number-form'>
                                                <Field name="phone" className='input-default' placeholder='Số điện thoại' />
                                            </div>
                                        </div>
                                        <div className='email-row'>
                                            <Field name="username" className='input-default' disabled />
                                        </div>
                                        <div className='address-row'>
                                            <Field name="address" className='input-default' placeholder='Địa chỉ (Ví dụ: 18 Duy Tân, Hải Châu, Đà Nẵng)' />
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
                                                <input type="radio" name="payment-method" className='radio-pick' />
                                                <div style={{ minWidth: "150px" }}>
                                                    <i class='bx bxs-truck truck-icon' ></i>
                                                </div>
                                                <span class="payment-method-name">COD - Thanh toán khi nhận hàng</span>
                                            </label>
                                            <label class="payment-method-template">
                                                <input type="radio" checked name="payment-method" className='radio-pick' />
                                                <div style={{ minWidth: "150px" }}>
                                                    <img className='payment-method-avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png' />
                                                </div>
                                                <span class="payment-method-name">Thanh toán Paypal</span>
                                            </label>
                                        </div>
                                    </div>

                                    {checkout ? (
                                        <Paypal propData1={totalMoney} username={user.username} />
                                    ) : (
                                        <div className='submit-form'>
                                            <button type='submit' className='click-pay' >Thanh toán</button>
                                        </div>
                                    )
                                    }
                                </Form>
                            </Formik>
                        }
                    </div>
                    <div className='cart-container'>
                        <div className='cart-items-container'>
                            <div className='cart-header'>
                                <i class='bx bx-cart-alt cart-icon-plus' ></i>
                                <p className='cart-title'>Giỏ hàng</p>
                            </div>
                            <div className={products.length === 0 ? 'mini-card-container' : ''}>
                                {!showSkeleton && products.length === 0 && <div className='no-product-on-cart'>Chưa có sản phẩm</div>}
                                {showSkeleton && products.length === 0 && <SkeletonMiniCard />}
                                {showSkeleton && products.length > 0 && products.map(() => {
                                    return (
                                        <>
                                            <SkeletonMiniCard />
                                        </>)
                                })}

                                {products && !showSkeleton && products.map((item) => {
                                    return (
                                        <MiniCard key={item.id} cart={item} />
                                    )
                                })}
                            </div>
                            <div className='receipt-info-container'>
                                <div className='voucher-container'>
                                    <input className='voucher-input' placeholder='Nhập mã giảm giá'></input>
                                    <div className='apply-voucher'>Áp dụng</div>
                                </div>
                                <div className='receipt-body'>
                                    <div className='receipt-row'>
                                        <p>Tạm tính</p>
                                        <p>{new Intl.NumberFormat("de-DE").format(totalMoney)}đ</p>
                                    </div>
                                    <div className='receipt-row'>
                                        <p>Giảm giá</p>
                                        <p>{new Intl.NumberFormat("de-DE").format(discount)}đ</p>
                                    </div>
                                    <div className='receipt-row'>
                                        <p>Phí giao hàng</p>
                                        <p>Miễn phí</p>
                                    </div>
                                </div>
                                <div className='receipt-total-money-container'>
                                    <div className='receipt-row'>
                                        <p>Tổng tiền</p>
                                        <p className='receipt-total-money'>{new Intl.NumberFormat("de-DE").format(totalMoney - discount)}đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <Footer />
        </>
    );
};

export default Cart;