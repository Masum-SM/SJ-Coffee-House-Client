import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark footer_full mx-auto'>
            <div className='footer_top_container'>
                <div className="footer_top p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1400px] mx-auto">
                    <div >
                        <h1>Subscribe to our SJ Coffee House</h1>
                        <p>Sign up to to order coffee from SJ Coffee House.</p>
                    </div>
                    <div className='lg:ml-32'>
                        <input type="email" placeholder='Enter your email' />
                        <button type="submit">SubsCribe</button>
                    </div>
                </div>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-[1400px] mx-auto">
                <div className='mr-4'>
                    <Link to="/" className="btn btn-ghost normal-case nav_icon_re sm: text-sm lg:text-xl text-left mb-3">SJ Coffee House</Link>
                    <p className='mb-3'><i className="fa-solid fa-location-dot ft_angle_icon"></i> Main Zins House (Ground Floor)Dhaka-1000, Bangladesh</p>
                    <p className='mb-3'><i className="fa-solid fa-phone ft_angle_icon"></i> +88-09666911463</p>
                    <p className='mb-3'><i className="fa-solid fa-fax ft_angle_icon"></i> Fax: 880-2-9667222</p>
                    <p className='mb-3'><i className="fa-solid fa-envelope ft_angle_icon"></i> sjhouse.coffee@gmail.com</p>
                </div>
                <div>
                    <h2 className='mt-10'> </h2>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Banani House</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Gulshan House</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Lalbug House</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Dhanmondi House</p>

                </div>
                <div>
                    <h2 className='mt-10'> </h2>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Turkies Fav</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Amerian Fav</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Caribian Fav</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Arabian Fav</p>

                </div>
                <div>
                    <h3 className='mb-3 footer_head2'> Useful Links</h3>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Facebook</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Youtube</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Intragram</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Telegram</p>
                </div>


            </div>
            <div className="footer_bottom text-center mx-auto">
                <p>© 2023 Coffee Point. All Rights Reserved. Design, Development and Maintenance by SJ Coffee House</p>
            </div>
        </div>
    );
};

export default Footer;