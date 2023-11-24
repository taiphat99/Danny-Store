import React, { useEffect, useState } from 'react';
import { getColorsByName, getSizesByNameAndColorId, getProductByNameAndColorId, checkSoldOut } from '../../service/ProductService';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, GET_CART_LIST, GET_USER } from '../cart/redux/Action';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const MainCard = ({ product, width }) => {
    const [item, setItem] = useState(product);
    const [colors, setColors] = useState();
    const [sizes, setSizes] = useState();
    const [colorIsActive, setColorIsActive] = useState(prev => prev = product.color_id);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const colorCode = {
        1: "black-color",
        2: "white-color",
        3: "gray-color",
        4: "navy-color"
    }
    const sizeCode = {
        1: "S",
        2: "M",
        3: "L",
        4: "XL"
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 600);
        return () => clearTimeout(timeoutId);
    }, [isLoading])

    useEffect(() => {
        loadColors();
        setColorIsActive(product.color_id);
        if (product.color_id == colorIsActive) {
            getProduct();
        }
    }, [product])

    useEffect(() => {
        loadSizes();
        getProduct();
    }, [colorIsActive])

    const getProduct = async () => {
        const target = await getProductByNameAndColorId(product.name, colorIsActive);
        setItem(target);
    }

    const loadColors = async () => {
        const res = await getColorsByName(product.name);
        setColors(res);
    }

    const loadSizes = async () => {
        const res = await getSizesByNameAndColorId(product.name, colorIsActive);
        setSizes(res);
    }

    const checkLatest = (date) => {
        const currentDate = new Date();
        const targetDate = new Date(date);
        const timeDiff = currentDate.getTime() - targetDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        if (daysDiff < 30) {
            return true;
        }
        return false;
    }

    const productIsAvailable = async (product_id, size_id) => {
        const quantity = await checkSoldOut(product_id, size_id);
        if (quantity > 0) {
            return true;
        }
        return false;
    }

    const addToCart = async (product, size, cost) => {
        setIsLoading(true);

        if (await productIsAvailable(product, size)) {
            toast.success("Đã thêm vào giỏ hàng!", { delay: 600 })
            dispatch({ type: GET_USER });
            dispatch({ type: ADD_TO_CART, payload: { user_id: user.id, product_id: product, size_id: size, price: cost } })
            dispatch({ type: GET_CART_LIST })
        } else {
            toast.error(`Size ${sizeCode[size]} đã hết hàng!`, { delay: 600 })
            dispatch({ type: GET_USER });
            dispatch({ type: GET_CART_LIST })

        }
    }
    const headingDetail = () => {
        navigate(`/detail/${item.id}`)
    }
    return (
        <>
            {item &&
                <div div className='product-card' style={{ width: `${width}` }} >
                    {isLoading &&
                        <div className='spinner-container'>
                            <ClipLoader className='spinner-item' color="#de3f20" />
                        </div>
                    }
                    <div className='card-image' >
                        <img onClick={headingDetail} src={item.avatar} />
                        <div className='size-list-container'>
                            <div className='size-list-title'>
                                Thêm nhanh vào giỏ hàng
                            </div>
                            <div className='size-list'>
                                {sizes && sizes.map((s) => {
                                    return (
                                        <a onClick={() => addToCart(item.id, s.size_id, item.price)} key={s.size_id} className='size-tag'>{s.size}</a>
                                    )
                                })}
                            </div>
                        </div>
                        {item.input_date && checkLatest(item.input_date) &&
                            <div className='extra-tag-on-top-right-corner'>
                                New
                            </div>
                        }
                    </div>
                    <div className='card-content'>
                        <div className='card-color-tags'>
                            {colors && colors.map((item) => {
                                return (
                                    <a key={item.color_id} onClick={() => { setColorIsActive(item.color_id) }} className={item.color_id == colorIsActive ? 'border-default border-on-focus' : 'border-default'}><div className={`${colorCode[item.color_id]} color-tag`}></div></a>
                                )
                            })}
                        </div>

                        <div className='card-name'>
                            <a onClick={headingDetail}>{item.name}</a>
                        </div>
                        <div className='card-color-name'>
                            <p style={{ fontSize: "0.85vw" }}>{item.color}</p>
                        </div>

                        <div className='card-color-price'>
                            <span>{new Intl.NumberFormat("de-DE").format(item.price)}đ</span>
                            <span>{item.sale_price && (new Intl.NumberFormat("de-DE").format(item.sale_price) + 'đ')}</span>
                            <span>{item.sale_price && (-(Math.round((item.sale_price - item.price) / item.sale_price * 100)) + '%')}</span>
                        </div>
                    </div>
                </div >
            }

        </>
    )
};


export default MainCard;