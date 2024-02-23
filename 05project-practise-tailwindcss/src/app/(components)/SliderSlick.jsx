"use client"

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCode } from 'react-icons/fa'
import { DiAndroid } from 'react-icons/di'
import { MdOutlineDesignServices } from 'react-icons/md'
import { FaBusinessTime } from 'react-icons/fa6'
import { MdSupportAgent } from 'react-icons/md'




const SliderSlick = () => {
    const data = [
        {
            "icon": FaCode,
            "title": "Web Development",
            "description": "Custom web development solutions tailored to your business needs.",
            "label": "Read More"
        },
        {
            "icon": DiAndroid,
            "title": "App Development",
            "description": "Expert mobile app development for iOS and Android platforms.",
            "label": "Read More"
        },
        {
            "icon": MdOutlineDesignServices,
            "title": "UI/UX Design",
            "description": "User-centric UI/UX design to enhance user experience and engagement.",
            "label": "Read More"
        },
        {
            "icon": MdOutlineDesignServices,
            "title": "Graphic Design",
            "description": "Creative graphic design services to make your brand visually appealing.",
            "label": "Read More"
        },

        {
            "icon": FaBusinessTime,
            "title": "SEO Optimization",
            "description": "Effective SEO optimization to improve your website's search engine rankings.",
            "label": "Read More"
        },
        {
            "icon": MdSupportAgent,
            "title": "24/7 Support",
            "description": "Engaging and informative content writing services to attract your target audience.",
            "label": "Read More"
        },

    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className='w-ful bg-slate-200 h-fit flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 gap-6'>
            <h1 className='text-6xl text-black font-bold'>Our Best Services</h1>
            <p className='text-xl text-center'>Discover our top-notch services designed to elevate your brand and drive success.</p>
            <div className='w-full h-fit p-8 slider-container'>
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div id='slider-boxes' key={index} className='bg-white p-10 rounded-xl flex flex-col justify-center items-center border-b-[8px] border-red-500'>
                            <div className='bg-yellow-400 hover:bg-yellow-500 cursor-pointer rounded-full p-6'>
                                {item.icon && <item.icon className="w-[45px] h-[45px]" />}
                            </div>

                            <div className='flex flex-col justify-center items-center gap-6 mt-6'>
                                <h1 className='text-2xl text-black font-bold'>{item.title}</h1>
                                <p className='text-[17px] text-center'>{item.description}</p>
                                <button className='bg-yellow-400 px-8 py-3 font-semibold rounded-xl hover:bg-black hover:text-white'>{item.label}</button>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    )
}

export default SliderSlick