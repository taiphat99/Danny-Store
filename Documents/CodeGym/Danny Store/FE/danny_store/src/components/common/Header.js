import React, { useEffect, useState } from 'react';
import Button from '../ripple/Button';
import Ripple from '../ripple/Ripple';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [invisible, setInvisible] = useState(false);
    // const [nameTarget, setNameTarget] = useState('');
    // const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = currentScrollPos > prevScrollPos && currentScrollPos > 100;
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

    return (
        <>
            <header id='header' className={`header ${invisible ? 'invisible' : ''}`}>
                <img src='./images/logo_danny.png' className='logo' />
                <div className='type-options'>
                    <Button className="button-with-ripple" >
                        <a className='sale-option option-on-header'>SALE</a>
                        <Ripple color={"#fff"} duration={1000} />
                    </Button>
                    <Button className="button-with-ripple ">
                        <a className='option-on-header'>QUẦN</a>
                        <Ripple color={"#fff"} duration={1000} />
                    </Button>
                    <Button className="button-with-ripple">
                        <a>ÁO</a>
                        <Ripple color={"#fff"} duration={1000} />
                    </Button>
                    <Button className="button-with-ripple">
                        <a>ĐỒ LÓT</a>
                        <Ripple color={"#fff"} duration={1000} />
                    </Button>
                </div>

                <div className="search-login-cart">
                    <div className="header-search" >
                        <input onKeyDown={handleOnKeyDown} type="text" className="search-bar" placeholder="Tìm kiếm sản phẩm" id='search-name' />
                        <i className="search-icon bx bx-search-alt-2"  ></i>
                    </div>
                    <div className="header-cart" >
                        <i className='cart-icon bx bxs-shopping-bag' style={{ color: '#fff' }}  ></i>
                        <div className='cart-count'><span>7</span></div>
                    </div>
                    <div className="header-user" style={{ color: '#fff' }}>
                        <i className='user-icon bx bxs-user'></i>
                    </div>
                </div>
            </header >
        </>
    );
};

export default Header;