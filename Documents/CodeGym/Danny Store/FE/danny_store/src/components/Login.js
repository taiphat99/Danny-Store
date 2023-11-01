import React from 'react';
import Button from './ripple/Button';
import Ripple from './ripple/Ripple';

const Login = () => {
    return (
        <>
            <div className='login-container'>
                <div className='login-main'>
                    <div className='login-avatar'>
                        <div className='image-container'>
                            <img className='login-main-picture' src='/images/signin-image.jpg' />
                        </div>
                    </div>
                    <div className='login-form'>
                        <p className='login-title'>Đăng Nhập</p>
                        <div className='login-name-input'>
                            <i class='bx bxs-user login-user-icon'></i>
                            <input placeholder='Tên đăng nhập' />
                        </div>
                        <div className='login-pass-input'>
                            <i class='bx bxs-lock-alt login-password-icon' ></i>
                            <input type='password' placeholder='Mật khẩu' />
                        </div>
                        <div className='remember-me-container'>
                            <input type='checkbox' id='remember-me' />
                            <label className='remember-me-label' htmlFor='remember-me'>
                                Nhớ tài khoản
                            </label>


                        </div>
                        <div className='login-button' >
                            <Button className="button-with-ripple " >
                                Đăng nhập
                                <Ripple color={"#fff"} duration={1000} />
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;