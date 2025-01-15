import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import introSlider1 from "@assets/introSlider1.webp";
import introSlider2 from "@assets/introSlider2.jpg";
import introSlider3 from "@assets/introSlider3.webp";
import { Parallax } from 'react-scroll-parallax';

const slides = [
    {
        image: introSlider1
    },
    {
        image: introSlider2
    },
    {
        image: introSlider3
    }
];

const IntroSlider = () => {
    const [parallaxSpeed, setParallaxSpeed] = useState(-100);

    useEffect(() => {
        const updateParallaxSpeed = () => {
            if (window.innerWidth < 1068) {
                setParallaxSpeed(0);
            } else {
                setParallaxSpeed(-100);
            }
        };

        updateParallaxSpeed();

        window.addEventListener('resize', updateParallaxSpeed);

        return () => {
            window.removeEventListener('resize', updateParallaxSpeed);
        };
    }, []);

    return (
        <div className="relative w-full h-96 sm:h-96 md:h-[500px] lg:h-[600px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    renderBullet: (index, className) => {
                        return `<span class="${className}">${index + 1}</span>`;
                    },
                    bulletClass: 'swiper-pagination-number',
                    bulletActiveClass: 'swiper-pagination-number-active',
                }}
                autoplay={{ delay: 5000 }}
                loop
                speed={1100}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full overflow-hidden">
                            <Parallax y={[-20, 20]} speed={parallaxSpeed} className="w-full h-full">
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </Parallax>
                        </div>

                    </SwiperSlide>
                ))}
                <div className="swiper-pagination !text-gold absolute z-10 bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 mb-10"></div>
            </Swiper>
            <div className="swiper-button-prev arrowes !text-gold px-0 sm:px-10"></div>
            <div className="swiper-button-next arrowes !text-gold px-0 sm:px-10"></div>
        </div>
    );
};

export default IntroSlider;