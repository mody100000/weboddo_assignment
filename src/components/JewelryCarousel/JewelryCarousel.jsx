import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Jewellery_1 from "@assets/Jewellery_1.png"
import Jewellery_2 from "@assets/Jewellery_2.png"
import Jewellery_3 from "@assets/Jewellery_3.png"

const products = [
    {
        id: 1,
        name: 'Curve Miracle Plate Diamond Ring',
        price: 13603,
        originalPrice: 17904,
        image: Jewellery_1
    },
    {
        id: 2,
        name: 'Intertwined Glim Diamond Ring',
        price: 21864,
        originalPrice: 27430,
        image: Jewellery_2
    },
    {
        id: 3,
        name: 'Exclusive Evil Eye Gold Charm',
        price: 6902,
        originalPrice: 7946,
        image: Jewellery_3
    },
    {
        id: 4,
        name: 'Exclusive Evil Eye Gold Charm',
        price: 6902,
        originalPrice: 7946,
        image: Jewellery_1
    }, {
        id: 5,
        name: 'Exclusive Evil Eye Gold Charm',
        price: 6902,
        originalPrice: 7946,
        image: Jewellery_2
    }, {
        id: 6,
        name: 'Exclusive Evil Eye Gold Charm',
        price: 6902,
        originalPrice: 7946,
        image: Jewellery_3
    },
    {
        id: 7,
        name: 'Estrena Dazzling Diamond Necklace',
        price: 25103,
        originalPrice: 31379,
        image: Jewellery_1
    }
];

const JewelryCarousel = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Best of CaratLane</h2>
                <div className="space-x-4">
                    <button className="px-6 py-2 bg-fuchsia-600 text-white font-medium rounded hover:bg-fuchsia-700">
                        WOMEN
                    </button>
                    <button className="px-6 py-2 bg-white text-gray-800 font-medium rounded border hover:bg-gray-50">
                        MEN
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={4}
                className="relative group"
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative aspect-square mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-semibold text-gray-900">₹{product.price.toLocaleString()}</span>
                                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                                </div>
                                <h3 className="text-sm text-gray-600 truncate">{product.name}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default JewelryCarousel;