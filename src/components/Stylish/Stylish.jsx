import React from 'react';

const Stylish = () => {
    return (
        <div className="bg-gray-50 p-12 flex flex-col lg:flex-row justify-center items-center">
            <div className="text-center lg:text-left mx-auto mb-8 lg:mb-0">
                <h1 className="text-6xl font-extrabold text-pink-600 mb-2">GOLD</h1>
                <p className="text-xl font-semibold text-pink-500 uppercase">
                    Exchange Program
                </p>
            </div>
            <div className="max-w-lg w-full">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    A Stylish Upgrade
                </h2>
                <hr className="border-t-2 border-pink-500 w-20 mb-4" />
                <p className="text-gray-600 mb-6">
                    - Enjoy 0% Deduction on your gold exchange value. Please note: The old gold
                    doesn't have to be from only CaratLane, it can be any gold jewellery you have.
                </p>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-md shadow-lg hover:from-pink-600 hover:to-purple-700">
                    Know More
                </button>
            </div>
        </div>
    );
};

export default Stylish;
