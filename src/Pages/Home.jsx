import React from 'react'
import './Pages.css'
import { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "swiper/css/effect-creative"

import Banner from '../assets/Images/plane1.jpg'
import Banner2 from '../assets/Images/airbanner.png'
import Banner3 from '../assets/Images/airanner2.png'
import Banner4 from '../assets/Images/accra.jpg'
import Banner5 from '../assets/Images/accra.jpg'
import Booking from './Booking';
import Planning from '../components/Planning';
import Destinations from '../components/Destinations';
import PeaceadvantageBanner from '../components/PeaceadvantageBanner';
import Contact from '../components/Contact';
import AboutPeace from '../components/AboutPeace';





const Home = () => {

  const plane = [
    {
      image: Banner,
      
    },

    {
      image: Banner2,
    },

    {
      image: Banner3,
    },

    {
      image: Banner4,
    },

    {
      image: Banner5,
    },


  ]

  return (
    <>
      <div className='nav__margin'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}

          autoplay={{
            delay: 50000,
            disableOnInteraction: false,
          }}

          loop={true}
          grabCursor={true}

          className='banner__container'>

          {plane.map((planes) => {
            return (
              <SwiperSlide className='courosel__container'>
                <img src={planes.image} className="banner__images" />
              </SwiperSlide>

            )
          })}

        </Swiper>
      </div>

      <div className='booking__container-home'>
        <Booking />
      </div>

      <Planning/>

      <Destinations />

      <PeaceadvantageBanner/>
      <AboutPeace />

      <Contact/>

    </>
  )
}


export default Home