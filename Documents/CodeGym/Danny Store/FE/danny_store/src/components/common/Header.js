import React, { useEffect, useState } from 'react';
import Button from '../ripple/Button';
import Ripple from '../ripple/Ripple';
import { Link, useNavigate } from 'react-router-dom';
import { userConverterFromToken } from '../../service/AuthService';
import { GET_CART_LIST, GET_USER } from '../cart/redux/Action';
import { useDispatch, useSelector } from 'react-redux';

const Header = ({ cart }) => {

    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [invisible, setInvisible] = useState(false);
    const navigate = useNavigate();
    const [nameTarget, setNameTarget] = useState('');



    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = currentScrollPos > prevScrollPos && currentScrollPos > 70;
            setPrevScrollPos(currentScrollPos);
            setInvisible(visible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);


    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            // if (nameTarget == '') {
            //     navigate('/list/ ');
            // }
            // navigate(`/list/${nameTarget}`);
        }
    }
    const headingHome = () => {
        navigate('/');
    }
    const headingPants = () => {
        navigate('/list/2');
    }
    const headingShirts = () => {
        navigate('/list/1');
    }
    const headingUnderwears = () => {
        navigate('/list/3');
    }
    const headingSale = () => {
        navigate('/');
    }
    const headingToOrder = () => {
        if (userConverterFromToken() != null) {
            navigate('/order');
        } else {
            navigate('/login');
        }
    }

    const headingToLogin = () => {
        if (userConverterFromToken() != null) {
            navigate('/');
        } else {
            navigate('/login');
        }
    }

    return (
        <>
            <header id='header' className={`header ${invisible ? 'invisible' : ''}`}>
                <img onClick={headingHome} src='https://firebasestorage.googleapis.com/v0/b/c4zone-da49c.appspot.com/o/logo_danny.png?alt=media&token=80ebfdad-a567-448a-9e44-8214d4fd422d' className='logo' />
                <div className='type-options'>
                    <Button className="button-with-ripple" >
                        <a onClick={headingSale} className='sale-option option-on-header'>SALE</a>
                        <Ripple color={"#fff"} duration={1000} />
                    </Button>
                    <Button className="button-with-ripple ">
                        <a onClick={headingPants} className=''>QUẦN
                            <Ripple color={"#fff"} duration={1000} /></a>
                    </Button>
                    <Button className="button-with-ripple">
                        <a onClick={headingShirts} className='category-on-navbar'>ÁO
                            <Ripple color={"#fff"} duration={1000} /></a>
                    </Button>
                    <Button className="button-with-ripple">
                        <a onClick={headingUnderwears} className=''>ĐỒ LÓT
                            <Ripple color={"#fff"} duration={1000} /></a>
                    </Button>
                </div>

                <div className="search-login-cart">
                    <div className="header-search" >
                        <input onKeyDown={handleOnKeyDown} type="text" className="search-bar" placeholder="Tìm kiếm sản phẩm" id='search-name' />
                        <i className="search-icon bx bx-search-alt-2"  ></i>
                    </div>
                    <div className="header-cart" onClick={headingToOrder}>
                        <i className='cart-icon bx bxs-shopping-bag' style={{ color: '#fff' }}  ></i>
                        <div className='cart-count'><span>{cart}</span></div>
                    </div>
                    <div onClick={headingToLogin} className="header-user" style={{ color: '#fff' }}>
                        <i className='user-icon bx bxs-user' style={{ color: userConverterFromToken() != null ? "rgb(255 238 111)" : "" }}></i>
                    </div>
                </div>
            </header >
        </>
    );
};

export default Header;