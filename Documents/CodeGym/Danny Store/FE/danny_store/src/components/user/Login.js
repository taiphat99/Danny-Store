import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Ripple from '../ripple/Ripple';
import Button from '../ripple/Button';
import { addJwtTokenToLocalStorage, auth } from '../../service/AuthService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { GET_USER } from '../cart/redux/Action';

const Login = () => {
    // const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const initAccount = {
        username: "",
        password: ""
    }

    const login = async (values) => {
        try {
            const res = await auth(values)
            if (res.status == 200) {
                toast("Chào mừng bạn đến với Danny Store");
                addJwtTokenToLocalStorage(res.data.jwtToken);
                dispatch({ type: GET_USER })
                navigate('/home');
            } else {
                toast.error("Tài khoản không hợp lệ")
            }
        } catch (error) {
            toast.error("Tài khoản không hợp lệ")
        }

    }



    return (

        <>
            <div className='login-container'>
                <div className='login-main'>
                    <div className='login-avatar'>
                        <div className='image-container'>
                            <img className='login-main-picture' src='/images/signin-image.jpg' alt='login' />
                        </div>
                    </div>
                    <Formik
                        initialValues={initAccount}
                        onSubmit={(values) => {
                            login(values);
                        }}
                    >
                        <Form>
                            <div className='login-form'>
                                <p className='login-title'>Đăng Nhập</p>
                                <div className='login-name-input'>
                                    <i className='bx bxs-user login-user-icon'></i>
                                    <Field name="username" placeholder='Tên đăng nhập' />

                                </div>
                                <div className='login-pass-input'>
                                    <i className='bx bxs-lock-alt login-password-icon' ></i>
                                    <Field name="password" type='password' placeholder='Mật khẩu' />
                                </div>
                                <div className='remember-me-container'>
                                    <input type='checkbox' id='remember-me' />
                                    <label className='remember-me-label' htmlFor='remember-me'>
                                        Nhớ tài khoản
                                    </label>


                                </div>
                                <button style={{ border: "none" }} type="submit" className='login-button' >
                                    <Button className="button-with-ripple " >
                                        Đăng nhập
                                        <Ripple color={"#fff"} duration={1000} />
                                    </Button>
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default Login;