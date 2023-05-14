import React, { useEffect, useState } from 'react';
import HomeMenu from './HomeMenu';

import { Link } from 'react-router-dom';

const HomeMenus = () => {
    
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then((res) => res.json())
            .then((data) => setItem(data.slice(0,3)))
    }, [])
    return (
        <div className="menu_section max-w-[1400px] mx-auto">
        <div className="menu_container lg:ml-16 ">
            <div className="menu_header">
                <h2 className="menu_hed">Our menus</h2>
                <h3 className="hed_pera">
                There’s nothing sweeter than a cup of bitter coffee. .
                </h3>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 cards max-w-10/12 mx-auto ">
                {item.map((card) => (
                    <HomeMenu key={card.id} card={card} ></HomeMenu>
                ))}
            </div>
            <div className="menu_btn_con max-w-[200px] mx-auto">
                
                <Link to="/menu"><button className=" btn menu_more mt-8 px-4">View More Coffees</button></Link>
                 
            </div>
        </div>
    </div>
    );
};

export default HomeMenus;