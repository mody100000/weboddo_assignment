import React from 'react'
import Harry from "@assets/Harry_potter.jpg"
import disney from "@assets/disney.jpg"
import Utsav from "@assets/Utsav.jpg"

function JewelleryMovie() {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-10 mt-10 lg:mt-20'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-8'>
                {/* First Image */}
                <div className='w-full md:w-1/3 overflow-hidden mb-8 md:mb-0'>
                    <img
                        src={disney}
                        alt="Harry"
                        className='w-full h-auto cursor-pointer hover:scale-[1.1] transition-transform duration-300'
                    />
                </div>

                {/* Middle Image with Text */}
                <div className='w-full md:w-1/3 overflow-hidden mb-8 md:mb-0'>
                    <div className='mb-8 md:mb-20 overflow-hidden'>
                        <img
                            src={Utsav}
                            alt="disney"
                            className='w-full h-auto cursor-pointer hover:scale-[1.1] transition-transform duration-300'
                        />
                    </div>
                    <p className='text-center text-xl cursor-pointer text-[#4F3267] '>
                        View All Collections
                    </p>
                </div>

                {/* Third Image */}
                <div className='w-full md:w-1/3 overflow-hidden'>
                    <img
                        src={Harry}
                        alt="Utsav"
                        className='w-full h-auto cursor-pointer hover:scale-[1.1] transition-transform duration-300'
                    />
                </div>
            </div>
        </div>
    )
}

export default JewelleryMovie