import React from 'react';

const List = () => {
    return (
        <>
            <div className='list-page-container'>
                <div className='list-container'>
                    <div className='sort-form'>
                        <p>Kiểu dáng</p>
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
                        <p>Kích cỡ</p>
                        <div className='size-list-container-on-list-page'>
                            <div className='size-list'>
                                <a className='size-tag'>S</a>
                                <a className='size-tag'>M</a>
                                <a className='size-tag'>L</a>
                                <a className='size-tag'>XL</a>
                            </div>
                        </div>
                        <div className='card-color-tags'>
                            <a className='border-default border-on-focus' ><div className='color-tag black-color'></div></a>
                            <a className='border-default '><div className='color-tag gray-color'></div></a>
                            <a className='border-default'><div className='color-tag white-color'></div></a>
                            <a className='border-default'><div className='color-tag navy-color'></div></a>
                        </div>
                        <p>Nhu cầu</p>
                        <div className='concept-list'>
                            <label>
                                <input name='concept' type="radio" className='radio-pick' />
                                <span>Thể thao</span>
                            </label>
                            <label>
                                <input name='concept' type="radio" className='radio-pick' />
                                <span>Thu đông</span>
                            </label>
                        </div>
                    </div>
                    <div className='product-list'>
                        <div className='result-n-sort-button'>
                            <p>12 kết quả</p>
                            <select className='sort-dropdown'>
                                <option value=''>Mới nhất</option>
                                <option value=''>Bán chạy nhất</option>
                                <option value=''>Giá tăng dần</option>
                                <option value=''>Giá giảm dần</option>
                            </select>
                        </div>
                        <div className='product-list-on-home' style={{ margin: "0 3%" }}>
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
                                        <a className='border-default' ><div className='color-tag black-color'></div></a>
                                        <a className='border-default border-on-focus'><div className='color-tag gray-color '></div></a>
                                        <a className='border-default'><div className='color-tag white-color'></div></a>
                                        <a className='border-default'><div className='color-tag navy-color'></div></a>
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
                                        <a className='border-default' ><div className='color-tag black-color'></div ></a>
                                        <a className='border-default border-on-focus'><div className='color-tag gray-color '></div></a>
                                        <a className='border-default'><div className='color-tag white-color'></div></a>
                                        <a className='border-default'><div className='color-tag navy-color'></div></a>
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
                                        <a className='border-default' ><div className='color-tag black-color'></div ></a>
                                        <a className='border-default border-on-focus'><div className='color-tag gray-color '></div></a>
                                        <a className='border-default'><div className='color-tag white-color'></div></a>
                                        <a className='border-default'><div className='color-tag navy-color'></div></a>
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
                                        <a className='border-default' ><div className='color-tag black-color'></div ></a>
                                        <a className='border-default border-on-focus'><div className='color-tag gray-color '></div></a>
                                        <a className='border-default'><div className='color-tag white-color'></div></a>
                                        <a className='border-default'><div className='color-tag navy-color'></div></a>
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
                    </div>
                </div>
            </div >
        </>
    );
};

export default List;