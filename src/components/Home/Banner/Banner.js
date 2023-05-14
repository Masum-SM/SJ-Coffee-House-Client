import React from 'react';
import "./Banner.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImages from './BannerImages';

const Banner = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
        cssEase: "ease-out",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const ban_imgs = [
        {
          id:1,
          img:"https://i.ibb.co/Njxq7xM/mashroom-coffee.jpg",
          des:"The special Mashroom Coffee.",
          
        },
        {
          id:2,
          img:"https://i.ibb.co/6Wt5Ttz/hot-cool.jpg",
          des:"Hot and Cool combo coffee pack.",
        },
        {
          id:3,
          img:"https://i.ibb.co/LZzKnqt/banne1.jpg",
          des:"Parcel coffee boomb at home.",
        },
        {
          id:4,
          img:"https://i.ibb.co/D5Gm8FM/slider-4.jpg",
          des:"Award ceremony for successfull Students. ",
        },


      ]

    return (
        <div id='banner_container_full'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-4/5 mx-auto">
                <div className="banner_left w-4/5  md:mx-auto mb-4 lg:ml-12 ">
                    <h2>Welcome to the SJ <span className='Coffee'>Coffee</span> House.</h2>
                    <p>Enjoy Every Cup of <span className='Coffee'>Coffee</span>.</p>
                    <h3 className='b_quets'>Around The Wordl</h3>
                    <h3 className='b_quets'><span className='Coffee'>Coffee</span> Flavof From</h3>
                    {/* <button>Read More</button> */}
                </div>
                <div className="banner_right w-4/5 md:mx-auto lg:ml-40">
                    <Slider {...settings}>
                        {
                            ban_imgs.map(slide => <BannerImages
                                key={slide.id}
                                slide = {slide}
                            ></BannerImages>)
                        }
                        
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Banner;