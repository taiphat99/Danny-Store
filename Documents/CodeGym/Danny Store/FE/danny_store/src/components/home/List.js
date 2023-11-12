import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { getColorsByNameAndSizeId, getProductsByTypeId, getSizesByNameAndColorId } from '../../service/ProductService';

const List = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        loadList();
        loadColors("Polo thể thao V2", 1);
        loadSizes("Polo thể thao V2", 1);
    }, [])

    const cardInfo = [{ 1: "a", 2: "b", 3: "c" }, { 1: "a", 2: "b", 3: "c" }]

    const loadList = async () => {
        const res = await getProductsByTypeId(1);
        setProducts(res);
    }

    const loadColors = async (name, sizeId) => {
        const res = await getColorsByNameAndSizeId(name, sizeId);
    }

    const loadSizes = async (name, colorId) => {
        const res = await getSizesByNameAndColorId(name, colorId);
    }

    return (

        <>
            <Header />
            <div className='list-page-container'>
                <div className='list-container'>
                    <div className='sort-form'>
                        <p style={{ marginBottom: "15px", fontWeight: "500" }}>Kiểu dáng</p>
                        <div className='type-list'>
                            <label className='type-label-tag'>
                                <input name='product-type' type="radio" className='radio-pick' />
                                <div className='avatar-n-name-on-type'>
                                    <img className='radio-item' src='https://mcdn.coolmate.me/image/October2023/mceclip1_90.png' />
                                    <span>Quần Trunk</span>
                                </div>
                            </label>
                            <label className='type-label-tag'>

                                <input name='product-type' type="radio" className='radio-pick' />
                                <div className='avatar-n-name-on-type'>
                                    <img className='radio-item' src='https://mcdn.coolmate.me/image/October2023/mceclip4_42.png' />
                                    <span>Quần Brief(Tam giác)</span>
                                </div>
                            </label>
                            <label className='type-label-tag'>

                                <input name='product-type' type="radio" className='radio-pick' />
                                <div className='avatar-n-name-on-type'>
                                    <img className='radio-item' src='https://mcdn.coolmate.me/image/October2023/mceclip0_89.png' />
                                    <span>Quần Boxer Short</span>
                                </div>
                            </label>
                        </div>
                        <p style={{ marginBottom: "20px", fontWeight: "500" }}>Kích cỡ</p>
                        <div className='size-list-container-on-list-page'>
                            <div className='size-list'>
                                <a className='size-tag'>S</a>
                                <a className='size-tag'>M</a>
                                <a className='size-tag'>L</a>
                                <a className='size-tag'>XL</a>
                            </div>
                        </div>
                        <p style={{ marginBottom: "20px", fontWeight: "500" }}>Màu sắc</p>
                        <div className='card-color-tags'>
                            <a className='border-default border-on-focus' ><div className='color-tag black-color'></div></a>
                            <a className='border-default '><div className='color-tag gray-color'></div></a>
                            <a className='border-default'><div className='color-tag white-color'></div></a>
                            <a className='border-default'><div className='color-tag navy-color'></div></a>
                        </div>
                        <p style={{ marginBottom: "20px", fontWeight: "500", marginTop: "20px" }}>Nhu cầu</p>
                        <div className='concept-list'>
                            <label style={{ display: "block", padding: "10px 0", marginBottom: "15px" }}>
                                <input name='concept' type="radio" className='radio-pick' />
                                <span style={{ marginLeft: "5px" }}>Thể thao</span>
                            </label>
                            <label style={{ display: "block" }}>
                                <input name='concept' type="radio" className='radio-pick' />
                                <span style={{ marginLeft: "5px" }}>Thu đông</span>
                            </label>
                        </div>
                    </div>
                    <div className='product-list'>
                        <div className='result-n-sort-button'>
                            <p style={{ fontSize: "0.8vw" }}>12 kết quả</p>
                            <select className='sort-dropdown'>
                                <option value=''>Mới nhất</option>
                                <option value=''>Bán chạy nhất</option>
                                <option value=''>Giá tăng dần</option>
                                <option value=''>Giá giảm dần</option>
                            </select>
                        </div>
                        <div className='product-list-on-home' style={{ margin: "0 3%" }}>
                            {products && products.map((item) => {

                                return (

                                    <div div className='product-card' >
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
                                                <a className='border-default' ><div className='color-tag black-color'></div></a>
                                                <a className='border-default border-on-focus'><div className='color-tag gray-color '></div></a>
                                                <a className='border-default'><div className='color-tag white-color'></div></a>
                                                <a className='border-default'><div className='color-tag navy-color'></div></a>
                                            </div>
                                            <div className='card-name'>
                                                <p>{item.name}</p>
                                            </div>
                                            <div className='card-color-name'>
                                                <p style={{ fontSize: "0.85vw" }}>Đen</p>
                                            </div>

                                            <div className='card-color-price'>
                                                <span>{new Intl.NumberFormat("de-DE").format(item.price)}đ</span>
                                                <span>{item.sale_price && (new Intl.NumberFormat("de-DE").format(item.sale_price) + 'đ')}</span>
                                                <span>{item.sale_price && (Math.round((item.sale_price - item.price) / item.sale_price * 100) + '%')}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default List;