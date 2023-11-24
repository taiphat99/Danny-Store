import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import QuantityHandler from '../common/QuantityHandler';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { checkSoldOut, getColorsByName, getImagesByProductId, getProductById, getProductByNameAndColorId, getSizesByNameAndColorId } from '../../service/ProductService';
import { ADD_TO_CART, GET_CART_LIST, GET_USER } from '../cart/redux/Action';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';



const Detail = () => {
    const param = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const [sizes, setSizes] = useState(null);
    const [colors, setColors] = useState();
    const [sizeIsActive, setSizeIsActive] = useState();
    const [colorIsActive, setColorIsActive] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartList)
    const [images, setImages] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const user = useSelector(state => state.user);

    const colorCode = {
        1: "black-color",
        2: "white-color",
        3: "gray-color",
        4: "navy-color"
    }
    const colorName = {
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
    console.log(quantity);

    useEffect(() => {
        dispatch({ type: GET_USER })
        dispatch({ type: GET_CART_LIST })
    }, [])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 600);
        return () => clearTimeout(timeoutId);
    }, [isLoading])

    useEffect(() => {
        getProduct();
    }, [colorIsActive])
    const getProduct = async () => {
        const target = await getProductById(param.id);
        loadColors(target.name);
        if (colorIsActive == null) {
            setColorIsActive(target.color_id);
        }
        if (colorIsActive) {
            const res = await getProductByNameAndColorId(target.name, colorIsActive);
            loadSizes(res.name);
            setProduct(res);
            loadImages(res.id);
        }
    }


    const loadColors = async (name) => {
        const res = await getColorsByName(name);
        setColors(res);
    }

    const loadSizes = async (name) => {
        const res = await getSizesByNameAndColorId(name, colorIsActive);
        setSizes(res);
    }

    const handleQuantityFromChildren = (data) => {
        setQuantity(data);
    }

    const loadImages = async (id) => {
        const pics = await getImagesByProductId(id);
        setImages(pics);
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
        if (sizeIsActive == null) {
            toast.error('Vui lòng chọn kích cỡ!', { delay: 600 })
        } else if (await productIsAvailable(product, size)) {
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

    return (
        <>
            <Header cart={cart.length} />
            <div className="detail-container">
                <div className="main-detail-swiper">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#888",
                            "--swiper-pagination-color": "#888",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 mainSwiper"
                    >
                        {images && images.map((pic) => {
                            return (
                                <SwiperSlide >
                                    <img className="image-on-detail-slide " src={pic.url} alt="" />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={5}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper bottomSwiper"
                    >
                        {images && images.map((pic) => {
                            return (
                                <SwiperSlide >
                                    <img className="image-on-detail-slide " src={pic.url} alt="" />
                                </SwiperSlide>
                            )
                        })}



                    </Swiper>
                </div>
                {product &&
                    <div className="detail-content-container">
                        <p className="title">{product.name}</p>
                        <p className="price-label">Giá khuyến mãi:</p>
                        <div className="price-line">
                            <span className="price-on-detail">{new Intl.NumberFormat("de-DE").format(product.price)}đ</span>
                            <span className="line-through-price-on-detail">{new Intl.NumberFormat("de-DE").format(product.sale_price)}đ</span>
                            <span className="discount-rate">{product.sale_price && (-(Math.round((product.sale_price - product.price) / product.sale_price * 100)) + '%')}</span>
                        </div>
                        <p className="size-label">Kích cỡ:</p>
                        <div className="size-types">
                            {sizes && sizes.map((size) => {
                                return (
                                    <a onClick={() => { setSizeIsActive(size.size_id) }} className={size.size_id == sizeIsActive ? 'size-button size-button-on-focus' : 'size-button'}>{size.size}</a>
                                )
                            })}
                        </div>
                        <p className="color-label">Màu sắc: {colorName[colorIsActive]}</p>
                        <div style={{ width: "50%" }} >
                            <div className='card-color-tags'>
                                {colors && colors.map((item) => {
                                    return (
                                        <a key={item.color_id} onClick={() => { setColorIsActive(item.color_id) }} className={item.color_id == colorIsActive ? 'border-default border-on-focus' : 'border-default'}><div className={`${colorCode[item.color_id]} color-tag-plus`}></div></a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className='handle-quantity-n-add-to-cart'>
                            <div className='detail-quantity-handler'>
                                <QuantityHandler onData={handleQuantityFromChildren} number={quantity} width='8vw' height='2.5vw' fontSize='0.85vw' borderRadius='14px' max={10} />
                            </div>
                            <button className='detail-add-to-card-container' disabled={isLoading} >
                                <div className='add-to-cart-button' onClick={() => addToCart(product.id, sizeIsActive, product.price)}>
                                    {isLoading &&
                                        <div className='spinner-container-on-detail'>
                                            <ClipLoader className='spinner-item-on-detail' color="#de3f20" />
                                        </div>
                                    }
                                    <i className='bx bx-cart-alt'></i>
                                    <p>Thêm vào giỏ hàng</p>
                                </div>
                            </button>
                        </div>
                    </div>
                }
            </div >
            <Footer />
        </>
    );
};

export default Detail;