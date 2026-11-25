import React from 'react'
import herobanner from '../assets/heroBanner.png'

const HeroSection = () => {
  return (
    <>
    <section
        className='flex flex-col items-center justify-center
        min-h-screen bg-cover bg-center bg-no-repeat, px-4 pt-20'
        style={{backgroundImage: `url(${herobanner})`}}
    >

    </section>
    </>
  )
}

export default HeroSection
