import React from 'react';
import Store from "@assets/Store.webp"
import TH from "@assets/T@H.webp"

const Testimonial = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src={TH}
                    alt="Unsure which design to pick"
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-6">
                    <h2 className="text-white text-2xl font-semibold mb-2">
                        Unsure Which Design To Pick?
                    </h2>
                    <p className="text-white mb-4">Book A FREE Home Trial!</p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded">
                        Schedule Appointment
                    </button>
                </div>
            </div>

            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src={Store}
                    alt="Visit our store"
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-6">
                    <h2 className="text-white text-2xl font-semibold mb-2">
                        Come visit us at any of our stores!
                    </h2>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Enter Pincode or City"
                            className="px-4 py-2 rounded border-none focus:outline-none w-full sm:w-auto"
                        />
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                            Locate Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
