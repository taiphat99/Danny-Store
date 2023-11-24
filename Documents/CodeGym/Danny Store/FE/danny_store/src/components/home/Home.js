import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Header from '../common/Header';
import Footer from '../common/Footer';

import { getBestsellers, getLatestProducts, getProductsByConceptId } from '../../service/ProductService';
import SkeletonCard from '../common/SkeletonCard';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CART_LIST, GET_USER } from '../cart/redux/Action';
import MainCard from '../common/MainCard';

const Home = () => {

    const [bestsellers, setBestsellers] = useState({ data: null, status: false });
    const [latestProducts, setLatestProducts] = useState({ data: null, status: true });
    const [sportConcept, setSportConcept] = useState(null);
    const [dailyConcept, setDailyConcept] = useState(null);
    const [winterConcept, setWinterConcept] = useState(null);
    const [showSkeleton, setShowSkeleton] = useState(true);
    const dispatch = useDispatch();
    const products = useSelector(state => state.cartList);

    useEffect(() => {
        dispatch({ type: GET_USER })
        dispatch({ type: GET_CART_LIST })
        loadList();
    }, [])

    useEffect(() => {
        handleScrollToTop();
        setShowSkeleton(true);
        const timeoutId = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [bestsellers.status, latestProducts.status])

    const loadList = async () => {
        const latestProducts = await getLatestProducts();
        setLatestProducts(prev => ({ ...prev, data: latestProducts }));
        const bestsellers = await getBestsellers();
        setBestsellers(prev => ({ ...prev, data: bestsellers }));
        const sport = await getProductsByConceptId(2, 4);
        setSportConcept(sport);
        const winter = await getProductsByConceptId(1, 4);
        setWinterConcept(winter);
        const daily = await getProductsByConceptId(3, 4);
        setDailyConcept(daily);
    }
    console.log(bestsellers);
    console.log(latestProducts);
    const handleScrollToTop = () => {
        const targetDiv = document.getElementById('home-target');
        if (targetDiv) {
            const targetOffset = targetDiv.offsetTop - 100;
            window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        }
    };

    const handleLatestProductsTag = () => {
        setLatestProducts(prev => ({ ...prev, status: true }))
        setBestsellers(prev => ({ ...prev, status: false }))
    }

    const handleBestsellersTag = () => {
        setBestsellers(prev => ({ ...prev, status: true }))
        setLatestProducts(prev => ({ ...prev, status: false }))

    }

    return (
        <>
            <Header cart={products.length} />
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
                <div className='new-product-n-bestsellers-container' id="home-target">
                    <div className='new-product-tag' >
                        <a onClick={handleLatestProductsTag} style={{ color: latestProducts.status ? "black" : "#88888875" }}>SẢN PHẨM MỚI</a>
                    </div>
                    <div className='bestsellers-tag'>
                        <a onClick={handleBestsellersTag} style={{ color: bestsellers.status ? "black" : "#88888875" }}>BÁN CHẠY NHẤT</a>
                    </div>
                </div>
                <div className='product-list-on-home'>
                    {!showSkeleton && latestProducts.data && latestProducts.status && latestProducts.data.map((item, index) => {
                        return (
                            <MainCard
                                key={index}
                                product={item}
                                width={'25%'}
                            />
                        )
                    })
                    }
                    {!showSkeleton && bestsellers.data && bestsellers.status && bestsellers.data.map((item, index) => {
                        return (
                            <MainCard
                                key={index}
                                product={item}
                                width={'25%'}
                            />
                        )
                    })
                    }

                    {showSkeleton && <>
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                    </>
                    }

                </div>
                <div className=''>
                    <img className='banner-1' src='https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_74.png' ></img>
                </div>
                <div className='jean-row'>
                    <div className='jean-title'>
                        SẢN PHẨM THỂ THAO
                    </div>
                    <div className='more-jeans'>
                        <a>Xem thêm</a>
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                </div>
                <div className='product-list-on-home'>
                    {!showSkeleton && sportConcept && sportConcept.map((item, index) => {
                        return (
                            <MainCard
                                key={index}
                                product={item}
                                width={'25%'}
                            />
                        )
                    })
                    }
                    {showSkeleton && <>
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                    </>
                    }

                </div>
                <div className=''>
                    <img className='banner-1' src='https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_87.png' ></img>
                </div>
                <div className='jean-row'>
                    <div className='jean-title'>
                        SẢN PHẨM HẰNG NGÀY
                    </div>
                    <div className='more-jeans'>
                        <a>Xem thêm</a>
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                </div>
                <div className='product-list-on-home'>
                    {!showSkeleton && dailyConcept && dailyConcept.map((item, index) => {
                        return (
                            <MainCard
                                key={index}
                                product={item}
                                width={'25%'}
                            />
                        )
                    })
                    }
                    {showSkeleton && <>
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                    </>
                    }
                </div>
                <div className=''>
                    <img className='banner-1' src='https://mcdn.coolmate.me/image/September2023/mceclip4_64.jpg' ></img>
                </div>
                <div className='jean-row'>
                    <div className='jean-title'>
                        SẢN PHẨM THU ĐÔNG
                    </div>
                    <div className='more-jeans'>
                        <a>Xem thêm</a>
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                </div>
                <div className='product-list-on-home'>
                    {!showSkeleton && winterConcept && winterConcept.map((item, index) => {
                        return (
                            <MainCard
                                key={index}
                                product={item}
                                width={'25%'}
                            />
                        )
                    })
                    }
                    {showSkeleton && <>
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                        <SkeletonCard width={'25%'} />
                    </>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;