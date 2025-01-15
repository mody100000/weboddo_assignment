import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import TopBanner from '../../components/TopBanner/TopBanner'
import Navbar from '../../components/Navbar/Navbar'
import IntroSlider from '../../components/IntroSlider/IntroSlider'
import ShayaGallery from '../../components/ShayaGallery/ShayaGallery'
import CardsGallery from '../../components/CardsGallery/CardsGallery'
import JewelleryMovie from '../../components/JewelleryMovie/JewelleryMovie'
import GridGallery from '../../components/GridGallery/GridGallery'
import Testimonial from '../../components/Testimonial/Testimonial'
import JewelryCarousel from '../../components/JewelryCarousel/JewelryCarousel'
import Stylish from '../../components/Stylish/Stylish'
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection'

function Home() {
    return (
        <ParallaxProvider>
            <TopBanner />
            <Navbar />
            <IntroSlider />
            <ShayaGallery />
            <CardsGallery />
            <JewelleryMovie />
            <GridGallery />
            <Testimonial />
            <Stylish />
            <JewelryCarousel />
            <FeaturesSection />
        </ParallaxProvider>
    )
}

export default Home