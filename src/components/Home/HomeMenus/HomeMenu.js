import React from 'react';

const HomeMenu = ({card}) => {
    const { img, name, des, price } = card
    return (
        <div className="card card-compact sm:w-4/5 lg:w-96 card_bg drop-shadow-2xl">
            <figure><img src={img} alt="Coffee" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl card_name">{name}</h2>
                <p className='text-justify'>{des}</p>
                <div className="card-actions justify-end">
                    <p className='text-2xl font-bold'>Price : $ {price}</p>
                    <button className="btn card_btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeMenu;