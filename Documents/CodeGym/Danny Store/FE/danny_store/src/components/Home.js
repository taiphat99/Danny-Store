import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
    return (
        <>
            <div className='main-container'>
                <div className='carousel-container'>
                    <div className="carousel-swiper-button-prev">
                        <div className="temp-tag">
                            <i className='bx bxs-chevron-left'></i>
                        </div>
                    </div>
                    <div className="carousel-swiper-button-next">
                        <div className="temp-tag">
                            <i className='bx bxs-chevron-right'></i>
                        </div>
                    </div>
                    <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: ".carousel-swiper-button-next",
                            prevEl: ".carousel-swiper-button-prev"
                        }}

                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper"
                        loop={true}
                    >
                        <SwiperSlide>
                            <a ><img className="carousel-image" src="./images/banner-1.avif" alt="" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a > <img className="carousel-image" src="./images/banner-2.avif" alt="" /></a>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='new-product-n-bestsellers-container'>
                    <div className='new-product-tag'>
                        <a>Sản phẩm mới</a>
                    </div>
                    <div className='bestsellers-tag'>
                        <a>Bán chạy nhất</a>
                    </div>
                </div>
                <div className='product-list-on-home'>
                    <div className='product-card'>
                        <div className='card-image'>
                            <img src='https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg' />
                            <div className='size-list-container'>
                                <div className='size-list-title'>
                                    Thêm nhanh vào giỏ hàng
                                </div>
                                <div className='size-list'>
                                    <a className='size-tag'>S</a>
                                    <a className='size-tag'>M</a>
                                    <a className='size-tag'>L</a>
                                    <a className='size-tag'>XL</a>
                                </div>
                            </div>
                            <div className='extra-tag-on-top-right-corner'>
                                New
                            </div>
                        </div>
                        <div className='card-content'>
                            <div className='card-color-tags'>
                                <a className='color-tag black-color border-on-focus'></a>
                                <a className='color-tag gray-color'></a>
                                <a className='color-tag white-color'></a>
                                <a className='color-tag navy-color'></a>
                            </div>
                            <div className='card-name'>
                                <p>Jeans Copper Denim Straight</p>
                            </div>
                            <div className='card-color-name'>
                                <p>Đen</p>
                            </div>

                            <div className='card-color-price'>
                                <span>1.539.000đ</span>
                                <span>1.599.000đ</span>
                                <span>-10%</span>
                            </div>
                        </div>

                    </div>
                    <div className='product-card'>
                        <div className='card-image'>
                            <img src='https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg' />
                            <div className='size-list-container'>
                                <div className='size-list-title'>
                                    Thêm nhanh vào giỏ hàng
                                </div>
                                <div className='size-list'>
                                    <a className='size-tag'>S</a>
                                    <a className='size-tag'>M</a>
                                    <a className='size-tag'>L</a>
                                    <a className='size-tag'>XL</a>
                                </div>
                            </div>
                            <div className='extra-tag-on-top-right-corner'>
                                New
                            </div>
                        </div>
                        <div className='card-content'>
                            <div className='card-color-tags'>
                                <a className='color-tag black-color border-on-focus'></a>
                                <a className='color-tag gray-color'></a>
                                <a className='color-tag white-color'></a>
                                <a className='color-tag navy-color'></a>
                            </div>
                            <div className='card-name'>
                                <p>Jeans Copper Denim Straight</p>
                            </div>
                            <div className='card-color-name'>
                                <p>Đen</p>
                            </div>
                            <div className='card-color-price'>
                                <span>1.539.000đ</span>
                                <span>1.599.000đ</span>
                                <span>-10%</span>
                            </div>
                        </div>

                    </div>
                    <div className='product-card'>
                        <div className='card-image'>
                            <img src='https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg' />
                            <div className='size-list-container'>
                                <div className='size-list-title'>
                                    Thêm nhanh vào giỏ hàng
                                </div>
                                <div className='size-list'>
                                    <a className='size-tag'>S</a>
                                    <a className='size-tag'>M</a>
                                    <a className='size-tag'>L</a>
                                    <a className='size-tag'>XL</a>
                                </div>
                            </div>
                            <div className='extra-tag-on-top-right-corner'>
                                New
                            </div>
                        </div>
                        <div className='card-content'>
                            <div className='card-color-tags'>
                                <a className='color-tag black-color border-on-focus'></a>
                                <a className='color-tag gray-color'></a>
                                <a className='color-tag white-color'></a>
                                <a className='color-tag navy-color'></a>
                            </div>
                            <div className='card-name'>
                                <p>Jeans Copper Denim Straight</p>
                            </div>
                            <div className='card-color-name'>
                                <p>Đen</p>
                            </div>

                            <div className='card-color-price'>
                                <span>1.539.000đ</span>
                                <span>1.599.000đ</span>
                                <span>-10%</span>
                            </div>
                        </div>

                    </div>
                    <div className='product-card'>
                        <div className='card-image'>
                            <img src='https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg' />
                            <div className='size-list-container'>
                                <div className='size-list-title'>
                                    Thêm nhanh vào giỏ hàng
                                </div>
                                <div className='size-list'>
                                    <a className='size-tag'>S</a>
                                    <a className='size-tag'>M</a>
                                    <a className='size-tag'>L</a>
                                    <a className='size-tag'>XL</a>
                                </div>
                            </div>
                            <div className='extra-tag-on-top-right-corner'>
                                New
                            </div>
                        </div>
                        <div className='card-content'>
                            <div className='card-color-tags'>
                                <a className='color-tag black-color border-on-focus'></a>
                                <a className='color-tag gray-color'></a>
                                <a className='color-tag white-color'></a>
                                <a className='color-tag navy-color'></a>
                            </div>
                            <div className='card-name'>
                                <p>Jeans Copper Denim Straight</p>
                            </div>
                            <div className='card-color-name'>
                                <p>Đen</p>
                            </div>

                            <div className='card-color-price'>
                                <span>1.539.000đ</span>
                                <span>1.599.000đ</span>
                                <span>-10%</span>
                            </div>
                        </div>

                    </div>
                    <div className='product-card'>
                        <div className='card-image'>
                            <img src='https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg' />
                            <div className='size-list-container'>
                                <div className='size-list-title'>
                                    Thêm nhanh vào giỏ hàng
                                </div>
                                <div className='size-list'>
                                    <a className='size-tag'>S</a>
                                    <a className='size-tag'>M</a>
                                    <a className='size-tag'>L</a>
                                    <a className='size-tag'>XL</a>
                                </div>
                            </div>
                            <div className='extra-tag-on-top-right-corner'>
                                New
                            </div>
                        </div>
                        <div className='card-content'>
                            <div className='card-color-tags'>
                                <a className='color-tag black-color border-on-focus'></a>
                                <a className='color-tag gray-color'></a>
                                <a className='color-tag white-color'></a>
                                <a className='color-tag navy-color'></a>
                            </div>
                            <div className='card-name'>
                                <p>Jeans Copper Denim Straight</p>
                            </div>
                            <div className='card-color-name'>
                                <p>Đen</p>
                            </div>

                            <div className='card-color-price'>
                                <span>1.539.000đ</span>
                                <span>1.599.000đ</span>
                                <span>-10%</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className=''>
                    <img className='banner-1' src='https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_74.png' ></img>
                </div>
            </div>
        </>
    );
};

export default Home;