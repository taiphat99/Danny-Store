import React, { useEffect, useState } from 'react';
import QuantityHandler from './QuantityHandler';
import { getColorsByName, getProductByIdAndSizeId, getProductByNameAndColorId, getSizesByNameAndColorId } from '../../service/ProductService';
import { useDispatch } from 'react-redux';
import { DELETE_SINGLE_CART, GET_CART_LIST, UPDATE_COLOR_ID, UPDATE_QUANTITY, UPDATE_SIZE_ID } from '../cart/redux/Action';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const MiniCard = ({ cart }) => {
    const param = useParams();
    const [colors, setColors] = useState();
    const [sizes, setSizes] = useState();
    const [item, setItem] = useState();
    const [size, setSize] = useState(cart.size_id);
    const [color, setColor] = useState();
    const [quantity, setQuantity] = useState(cart.quantity);
    const dispatch = useDispatch();

    const colorCode = {
        1: "Đen",
        2: "Trắng",
        3: "Xám",
        4: "Xanh Navy"
    }

    const sizeCode = {
        1: "S",
        2: "M",
        3: "L",
        4: "XL"
    }

    useEffect(() => {
        getProductByProductIdAndSizeIdFirstTime(cart.product_id, cart.size_id);
    }, [])

    useEffect(() => {
        item && getProductByProductIdAndSizeId(item.id, size);
    }, [size])

    useEffect(() => {
        item && loadSizes();
        if (color && item) {
            getProductByNameAndColor();
        }
    }, [color])

    const getProductByProductIdAndSizeIdFirstTime = async (product_id, size_id) => {
        const target = await getProductByIdAndSizeId(product_id, size_id);
        loadColors(target.name)
        setColor(target.color_id);
        setItem(target);
    }

    const getProductByProductIdAndSizeId = async (product_id, size_id) => {
        const target = await getProductByIdAndSizeId(product_id, size_id);
        setItem(target);
    }

    const getProductByNameAndColor = async () => {
        const target = await getProductByNameAndColorId(item.name, color);
        getProductByProductIdAndSizeId(target.id, size);
    }

    const loadColors = async (name) => {
        const res = await getColorsByName(name);
        setColors(res);
    }

    const loadSizes = async () => {
        const res = await getSizesByNameAndColorId(item.name, color);
        setSizes(res);
    }

    const handleQuantityFromChildren = (data) => {
        setQuantity(data);
        if (data != cart.quantity) {
            dispatch({ type: UPDATE_QUANTITY, payload: { cart_id: cart.id, quantity: data } })
            dispatch({ type: GET_CART_LIST })
        }
    }

    const handleDeleteCart = () => {
        toast.success("Đã xoá sản phẩm khỏi giỏ hàng", { delay: 500 });
        console.log(2);
        dispatch({ type: DELETE_SINGLE_CART, payload: cart.id })
        // dispatch({ type: GET_CART_LIST })
    }

    const handleColorChange = async (event) => {
        const currentColor = event.target.value;
        setColor(currentColor);
        const target = await getProductByNameAndColorId(item.name, currentColor);
        dispatch({ type: UPDATE_COLOR_ID, payload: { cart_id: cart.id, product_id: target.id } })
        dispatch({ type: GET_CART_LIST })
    }

    const handleSizeChange = (event) => {
        const currentSize = event.target.value;
        setSize(currentSize);
        dispatch({ type: UPDATE_SIZE_ID, payload: { cart_id: cart.id, size_id: currentSize } })
        dispatch({ type: GET_CART_LIST })
    }
    return (
        <>
            {item &&
                <div className='cart-item-card'>
                    <div className='cart-card-avatar-container'>
                        <img className='cart-card-avatar' src={item.avatar} />
                    </div>
                    <div className='cart-card-content'>
                        <div className='cart-card-name-n-size-n-color-info'>
                            <p className='cart-card-name'>{item.name}</p>
                            <div className='color-n-size-info'>
                                <span>{colorCode[color]} </span>/<span> size {sizeCode[size]}</span>
                            </div>
                            <p className='color-n-size-info'>Số lượng: {quantity}</p>

                        </div>
                        <div className='color-n-size-dropdown'>
                            {colors && <select onChange={handleColorChange} defaultValue={color} className='dropdown-custome' id='color-dropdown'>
                                {colors.map((col) => {
                                    return (
                                        <option value={col.color_id}>{col.color}</option>
                                    )
                                })}
                            </select>}
                            {sizes &&
                                <select onChange={handleSizeChange} defaultValue={size} className='dropdown-custome' id='color-dropdown'>
                                    {sizes.map((s) => {
                                        return (
                                            <option value={s.size_id}>{s.size}</option>
                                        )
                                    })}
                                </select>}
                        </div>
                        <div className='quantity-handler-n-price-container'>
                            <QuantityHandler onData={handleQuantityFromChildren} number={quantity} width='5vw' height='1.6vw' fontSize='0.85vw' borderRadius='5px' max={item.quantity} />
                            <div className='cart-card-item-price-container'>
                                <p className='item-price'>{new Intl.NumberFormat("de-DE").format(item.price * quantity)}đ</p>
                                <p className='line-through-item-price'>{item.sale_price && (new Intl.NumberFormat("de-DE").format(item.sale_price * quantity) + 'đ')}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <i class='bx bx-trash delete-icon' onClick={handleDeleteCart}></i>
                    </div>
                </div>
            }
        </>
    );
};

export default MiniCard;