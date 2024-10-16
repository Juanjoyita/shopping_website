"use client "

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/baner1.jpg",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20",
        },
    ];

    return (
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) => ( // Corregido "mapa" a "map"
                    <Slide key={item.id} // Asegúrate de que "key" esté dentro de los props de <Slide>
                        img={item.img}
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default Hero;
