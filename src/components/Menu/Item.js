import React from 'react';
import './Menu.css'

const Item = ({ card }) => {
    const { img, name, des, price } = card
    return (
        // <div className="card card-side bg-base-100 drop-shadow-xl single_card grid grid-cols-1 lg:grid-cols-2">
        //     <figure  className="t_img_container"><div>
        //         <img src={img} alt="Movie" />
        //         </div></figure>
        //     <div className="card-body crd_bdy_teacher">
        //         <h2 className="card-title">{name}</h2>
        //         <p>{des}</p>
        //         <h4>{price}</h4>
        //         <div className="card-actions ">
        //             <button className="btn btn-primary">VIEW PROFILE</button>
        //         </div>
        //     </div>
        // </div>


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

export default Item;