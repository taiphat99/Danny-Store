import React from 'react';

const SkeletonCard = ({ width }) => {
    return (
        <>
            <div div className='product-card' style={{ width: `${width}` }}>
                <div className='card-image-skeleton skeleton'>
                    <div className='extra-tag-on-top-right-corner-skeleton skeleton'>
                    </div>
                </div>
                <div className='card-content '>
                    <div className='card-color-tags '>
                        <div className='color-tag-skeleton skeleton'></div>
                        <div className='color-tag-skeleton skeleton'></div>
                        <div className='color-tag-skeleton skeleton'></div>
                        <div className='color-tag-skeleton skeleton'></div>

                    </div>
                    <div className='card-name ' style={{ marginBottom: "6px" }}>
                        <p className='product-name-skeleton skeleton'></p>
                    </div>
                    <div className='card-color-name '>
                        <p className='product-price-skeleton skeleton'></p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SkeletonCard;