import React from 'react';

const SkeletonMiniCard = () => {
    return (
        <>
            <div className='cart-item-card '>
                <div className='cart-card-avatar-container'>
                    <div className='cart-card-avatar-skeleton skeleton'></div>
                </div>
                <div className='cart-card-content'>
                    <div className='cart-card-name-n-size-n-color-info'>
                        <p className='cart-card-name-skeleton skeleton'></p>
                        <p className='color-n-size-info-skeleton skeleton'></p>
                        <p className='color-n-size-info-skeleton skeleton'></p>

                    </div>
                </div>
                <div>
                    <div class='delete-icon-skeleton skeleton'></div>
                </div>
            </div>
        </>
    );
};

export default SkeletonMiniCard;