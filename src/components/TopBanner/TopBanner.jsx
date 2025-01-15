import React, { useState, useEffect } from 'react';

const TopBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const carouselItems = [
        {
            label: "CaratLane - A TATA Product",
            content: "Introducing CaratLane PoP! 9=10 | Plan your purchase",
            link: "#",
            linkText: "here"
        },
        {
            label: "Free Shipping",
            content: "On All Orders | No Minimum Purchase Required",
            link: "#",
            linkText: "learn more"
        },
        {
            label: "Special Offer",
            content: "Get 10% off on Diamond Jewelry",
            link: "#",
            linkText: "shop now"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentSlide((prev) =>
                    prev === carouselItems.length - 1 ? 0 : prev + 1
                );
                setIsFading(false);
            }, 500);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-[#4F3267] text-white text-sm">
            <div className="max-w-7xl mx-auto py-2 px-4">
                <div className="flex justify-center items-center">
                    <div className={`font-medium ${isFading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                        {carouselItems[currentSlide].label}
                    </div>

                    <div className="flex items-center space-x-1">
                        <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                            {carouselItems[currentSlide].content}
                        </div>
                        &nbsp;
                        <a
                            href={carouselItems[currentSlide].link}
                            className={`text-pink-400 hover:text-pink-300 transition-colors ${isFading ? 'opacity-0' : 'opacity-100'}`}
                        >
                            {carouselItems[currentSlide].linkText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
