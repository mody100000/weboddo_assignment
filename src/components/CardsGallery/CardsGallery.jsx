import React from 'react'
import Card from './Card'

import CardImg1 from "@assets/card_1.jpg"
import CardImg2 from "@assets/card_2.jpg"
import CardImg3 from "@assets/card_3.jpg"
import CardImg4 from "@assets/card_4.jpg"
import CardImg5 from "@assets/card_5.jpg"
import CardImg6 from "@assets/card_6.jpg"

function CardsGallery() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-5'>
            <Card cardImg={CardImg1} />
            <Card cardImg={CardImg2} />
            <Card cardImg={CardImg3} />
            <Card cardImg={CardImg4} />
            <Card cardImg={CardImg5} />
            <Card cardImg={CardImg6} />

        </div>
    )
}

export default CardsGallery