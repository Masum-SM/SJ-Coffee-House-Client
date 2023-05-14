import React, { useEffect, useState } from 'react';
import Item from './Item';


const Menus = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("https://sj-coffee-server.vercel.app/menu")
            .then((res) => res.json())
            .then((data) => setItem(data))
    }, [])
    return (
        // <div className='menu_full'>
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
                            <Item key={card.id} card={card} ></Item>
                        ))}
                    </div>

                </div>
            </div>
        // </div>
    );
};

export default Menus;