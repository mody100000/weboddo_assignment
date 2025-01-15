import React from 'react'
import ShayaImg from "@assets/shaya.jpg";
import LionKingImg from "@assets/lion_king.webp";
import LatestDesignGif from "@assets/latest_design.gif";

function ShayaGallery() {
    return (
        <div className="p-5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl overflow-hidden">
                <img src={ShayaImg} className='w-full h-full object-cover' />

                <div className="w-full h-full flex flex-col gap-5 md:gap-10">
                    <img src={LionKingImg} className='w-full object-cover' />
                    <img src={LatestDesignGif} className='w-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default ShayaGallery