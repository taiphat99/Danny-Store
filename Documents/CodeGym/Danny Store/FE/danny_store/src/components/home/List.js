import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { getCategoriesByTypeId, getColors, getProducts, getSizes } from '../../service/ProductService';
import { useNavigate, useParams } from 'react-router-dom';
import SkeletonCard from '../common/SkeletonCard';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CART_LIST, GET_USER } from '../cart/redux/Action';
import MainCard from '../common/MainCard';

const List = () => {
    const param = useParams();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState();
    const [colors, setColors] = useState();
    const [sizes, setSizes] = useState();
    const [concepts, setConcepts] = useState();
    const [conceptIsActive, setConceptIsActive] = useState("%");
    const [colorIsActive, setColorIsActive] = useState("%");
    const [sizeIsActive, setSizeIsActive] = useState("%");
    const [categoryIsActive, setCategoryIsActive] = useState("%");
    const [type, setType] = useState(param.type);
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [sortName, setSortName] = useState('latest');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cartList)

    const colorCode = {
        1: "black-color",
        2: "white-color",
        3: "gray-color",
        4: "navy-color"
    }
    useEffect(() => {
        dispatch({ type: GET_USER })
        dispatch({ type: GET_CART_LIST })
    }, [])
    useEffect(() => {
        setType(param.type);
    }, [param.type])

    useEffect(() => {
        handleResetFilter();
        loadColors();
        loadSizes()
        loadCategories();
        // console.log('inside of filter');
    }, [type])

    useEffect(() => {
        loadList();
        handleScrollToTop();
        setShowSkeleton(true);
        const timeoutId = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [categoryIsActive, sizeIsActive, conceptIsActive, colorIsActive, type, sortName])

    const handleScrollToTop = () => {
        const targetDiv = document.getElementById('targetTop');
        if (targetDiv) {
            const targetOffset = targetDiv.offsetTop - 100;
            window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        }
    };

    const loadList = async () => {
        const res = await getProducts(type, categoryIsActive, conceptIsActive, sizeIsActive, colorIsActive, sortName);
        setProducts(res);
    }

    const loadCategories = async () => {
        const res = await getCategoriesByTypeId(type);
        setCategories(res);
    }

    const loadColors = async () => {
        const res = await getColors();
        setColors(res);
    }
    const loadSizes = async () => {
        const res = await getSizes();
        setSizes(res);
    }
    const handleCategoryChange = (event) => {
        setCategoryIsActive(event.target.value);
    }
    const handleConceptChange = (event) => {
        setConceptIsActive(event.target.value);
    }
    const handleResetFilter = () => {
        setCategoryIsActive('%');
        setColorIsActive('%');
        setSizeIsActive('%');
        setConceptIsActive('%');
    }
    const handleSort = (event) => {
        setSortName(event.target.value);
    }

    return (
        <>
            <Header cart={cart.length} />
            <div className='list-page-container'>
                <div className='list-container' id='targetTop'>
                    <div className='sticky-dad'>
                        <div className='sort-form'>
                            <div className='first-line-on-sort'>
                                <p style={{ fontWeight: "500" }}>Kiểu dáng</p>
                                <button onClick={handleResetFilter} className='delete-filter-button'>Xoá lọc</button>
                            </div>
                            <div className='type-list'>
                                {categories && categories.map((item) => {

                                    return (
                                        <label className='type-label-tag'>
                                            <input value={item.category_id} checked={item.category_id == categoryIsActive} onChange={handleCategoryChange} name='product-type' type="radio" className='radio-pick' />
                                            <div className='avatar-n-name-on-type'>
                                                {item.category_id == 7 && <img className='radio-item' src='https://mcdn.coolmate.me/image/October2023/mceclip1_90.png' />}
                                                {item.category_id == 6 && <img className='radio-item' src='https://mcdn.coolmate.me/image/October2023/mceclip4_42.png' />}
                                                {item.category_id == 4 && <img className='radio-item' src='https://mcdn.coolmate.me/image/October2023/mceclip0_89.png' />}
                                                {item.category_id == 5 && <img className='radio-item' src='https://mcdn.coolmate.me/image/October2023/mceclip1_79.png' />}
                                                <span style={{ fontSize: "0.9vw" }}>{item.category}</span>
                                            </div>
                                        </label>
                                    )
                                })}
                            </div>
                            <p className='size-title'>Kích cỡ</p>
                            <div className='size-list-container-on-list-page'>
                                <div className='size-list'>
                                    {sizes && sizes.map((size) => {
                                        return (
                                            <a onClick={() => { setSizeIsActive(size.size_id) }} className={size.size_id == sizeIsActive ? 'size-tag size-tag-on-focus' : 'size-tag'}>{size.size}</a>
                                        )
                                    })}

                                </div>
                            </div>
                            <p className='color-title'>Màu sắc</p>
                            <div className='card-colors-tags-container'>
                                <div className='card-color-tags'>
                                    {colors && colors.map((item) => {
                                        return (
                                            <a key={item.color_id} onClick={() => { setColorIsActive(item.color_id) }} className={item.color_id == colorIsActive ? 'border-default border-on-focus' : 'border-default'}><div className={`${colorCode[item.color_id]} color-tag`}></div></a>
                                        )
                                    })}
                                </div>
                            </div>
                            <p className='color-title'>Nhu cầu</p>
                            <div className='concept-list'>
                                <label className='concept-label-container'>
                                    <input value='1' checked={'1' == conceptIsActive} onChange={handleConceptChange} name='concept' type="radio" className='radio-pick' />
                                    <span style={{ marginLeft: "5px" }}>Thu đông</span>
                                </label>
                                <label className='concept-label-container'>
                                    <input value='2' checked={'2' == conceptIsActive} onChange={handleConceptChange} name='concept' type="radio" className='radio-pick' />
                                    <span style={{ marginLeft: "5px" }}>Thể thao</span>
                                </label>

                                <label className='concept-label-container'>
                                    <input value='3' checked={'3' == conceptIsActive} onChange={handleConceptChange} name='concept' type="radio" className='radio-pick' />
                                    <span style={{ marginLeft: "5px" }}>Hằng ngày</span>
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className='product-list'>
                        <div className='result-n-sort-button'>
                            <p style={{ fontSize: "0.8vw" }}>{products.length} kết quả</p>
                            <select value={sortName} className='sort-dropdown' onChange={handleSort}>
                                <option value='latest'>Mới nhất</option>
                                <option value='bestsellers'>Bán chạy nhất</option>
                                <option value='price_asc'>Giá tăng dần</option>
                                <option value='price_desc'>Giá giảm dần</option>
                            </select>
                        </div>
                        <div className='product-list-on-home' style={{ margin: "0 3%" }}>

                            {products.length != 0 && !showSkeleton && products.map((item, index) => {
                                return (
                                    <>
                                        <MainCard
                                            key={index}
                                            product={item}
                                            width={'25%'}
                                        />
                                    </>
                                )
                            })}
                            {products.length == 0 && !showSkeleton && <div className='no-products-found'>Không có sản phẩm phù hợp!</div>}

                            {showSkeleton && (
                                <>
                                    <SkeletonCard width={'25%'} />
                                    <SkeletonCard width={'25%'} />
                                    <SkeletonCard width={'25%'} />
                                    <SkeletonCard width={'25%'} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default List;