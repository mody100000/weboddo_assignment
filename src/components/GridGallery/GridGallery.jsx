import React from 'react'
import grid_1 from "@assets/grid_1.webp"
import grid_2 from "@assets/grid_2.webp"
import grid_3 from "@assets/grid_3.webp"
import grid_4 from "@assets/grid_4.jpg"


function GridGallery() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 px-0 md:px-10 gap-8 mt-10'>
            <div><img src={grid_1} alt="grid_1" /></div>
            <div><img src={grid_2} alt="grid_2" /></div>
            <div><img src={grid_3} alt="grid_3" /></div>
            <div><img src={grid_4} alt="grid_4" /></div>

        </div>
    )
}

export default GridGallery