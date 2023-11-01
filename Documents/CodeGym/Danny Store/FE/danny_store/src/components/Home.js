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
                            <div className='size-list'>
                                <div className='size-tag'>S</div>
                                <div className='size-tag'>M</div>
                                <div className='size-tag'>L</div>
                                <div className='size-tag'>XL</div>
                            </div>
                        </div>
                        <div className='card-color-tags'>
                            <div className='color-tag'></div>
                            <div className='color-tag'></div>
                            <div className='color-tag'></div>
                        </div>
                        <div className='card-name'>
                            <p>Jeans Copper Denim Straight</p>
                        </div>
                        <div className='card-color-name'>
                            <span>539.000đ</span>
                            <span>599.000đ</span>
                            <span>-10%</span>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='card-image'>
                            <img src='https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg' />
                        </div>
                        <div className='card-color-tags'>
                            <div className='color-tag'></div>
                            <div className='color-tag'></div>
                            <div className='color-tag'></div>
                        </div>
                        <div className='card-name'>
                            <p>Jeans Copper Denim Straight</p>
                        </div>
                        <div className='card-color-name'>
                            <span>539.000đ</span>
                            <span>599.000đ</span>
                            <span>-10%</span>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='card-image'>
                            <img src='https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg' />
                        </div>
                        <div className='card-color-tags'>
                            <div className='color-tag'></div>
                            <div className='color-tag'></div>
                            <div className='color-tag'></div>
                        </div>
                        <div className='card-name'>
                            <p>Jeans Copper Denim Straight</p>
                        </div>
                        <div className='card-color-name'>
                            <span>539.000đ</span>
                            <span>599.000đ</span>
                            <span>-10%</span>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='card-image'>
                            <img src='https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg' />
                        </div>
                        <div className='card-color-tags'>
                            <div className='color-tag'></div>
                            <div className='color-tag'></div>
                            <div className='color-tag'></div>
                        </div>
                        <div className='card-name'>
                            <p>Jeans Copper Denim Straight</p>
                        </div>
                        <div className='card-color-name'>
                            <span>539.000đ</span>
                            <span>599.000đ</span>
                            <span>-10%</span>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='card-image'>
                            <img src='https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg' />
                        </div>
                        <div className='card-color-tags'>
                            <div className='color-tag'></div>
                            <div className='color-tag'></div>
                            <div className='color-tag'></div>
                        </div>
                        <div className='card-name'>
                            <p>Jeans Copper Denim Straight</p>
                        </div>
                        <div className='card-color-name'>
                            <span>539.000đ</span>
                            <span>599.000đ</span>
                            <span>-10%</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;