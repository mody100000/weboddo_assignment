import React from 'react'

function Card({ cardImg }) {
  return (
    <div className='md:rounded-[40px] md:hover:scale-[1.05] transition-transform ease-in-out cursor-pointer origin-center overflow-hidden'>
      <img src={cardImg} className='w-full' />
    </div>
  )
}

export default Card