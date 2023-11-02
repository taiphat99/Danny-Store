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
import QuantityHandler from './common/QuantityHandler';


const Detail = () => {
    const param = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);



    return (
        <>
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
                        <SwiperSlide >
                            <img className="image-on-detail-slide" src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/QD001.20_38.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className="image-on-detail-slide" src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/QD001.24_53.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className="image-on-detail-slide" src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/QD001.21.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className="image-on-detail-slide" src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2023/proac.akpk.2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className="image-on-detail-slide" src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/AD001.s2.5.jpg" alt="" />
                        </SwiperSlide>
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
                        <SwiperSlide >
                            <img className="image-on-detail-slide " src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/QD001.20_38.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className="image-on-detail-slide" src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/QD001.24_53.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className="image-on-detail-slide" src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/QD001.21.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className="image-on-detail-slide" src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2023/proac.akpk.2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className="image-on-detail-slide" src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/AD001.s2.5.jpg" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="detail-content-container">
                    <p className="title">Áo khoác gió Active</p>
                    <p className="price-label">Giá khuyến mãi:</p>
                    <div className="price-line">
                        <span className="price-on-detail">{new Intl.NumberFormat("de-DE").format(1300000)}đ</span>
                        <span className="line-through-price-on-detail">{new Intl.NumberFormat("de-DE").format(1400000)}đ</span>
                        <span className="discount-rate"> -10% </span>
                    </div>
                    <p className="size-label">Kích cỡ:</p>
                    <div className="size-types">
                        <div className='size-button'>S</div>
                        <div className='size-button'>M</div>
                        <div className='size-button'>L</div>
                        <div className='size-button'>XL</div>
                    </div>
                    <p className="color-label">Màu sắc: Đen</p>

                    <div className='card-color-tags'>
                        <a className='color-tag black-color border-on-focus'></a>
                        <a className='color-tag gray-color'></a>
                        <a className='color-tag white-color'></a>
                        <a className='color-tag navy-color'></a>
                    </div>

                    <div className='handle-quantity-n-add-to-cart'>
                        <div className='detail-quantity-handler'>
                            <QuantityHandler height='40px' />
                        </div>
                        <div className='detail-add-to-card-container'>
                            <div className='add-to-cart-button'>Thêm vào giỏ hàng</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Detail;