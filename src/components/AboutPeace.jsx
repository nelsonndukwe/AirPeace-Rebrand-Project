import React, { useRef, useState } from "react";
import './Component.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const AboutPeace = () => {

  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <div className='container about__container'>

      <h2>Our Core Values</h2>


      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper'>
          <div>
            <h3>Our Vision</h3>

            <span>
              <p>To be ever dependable through the creation of seamless connections and network options for our domestic, regional and international markets.</p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper'>
          <div>
            <h3>Our Mission</h3>

            <span>
              <p>To expand locations both domestically and beyond as the largest and most profitable airline company to achieve safe, efficient and affordable short and long haul services.</p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper'><div>
          <h3>Why Choose Us</h3>

          <span>
            <p>We are committed to the concept of Total Quality Management in which every function in our airline as well as support organisation is performed and audited to ensure stringent compliance with the requirements of the Nigeria Civil Aviation Regulations (Nig. CARs).</p>
          </span>
        </div></SwiperSlide>
        <SwiperSlide className='swiper'><div>
          <h3>Local Content</h3>

          <span>
            <p>One of the major ideas behind setting up Air Peace is to create massive employment opportunities for Nigerians, thereby contributing to the well-being of our people.</p>
          </span>
        </div></SwiperSlide>

      </Swiper>

      
    </div>
  )
}

export default AboutPeace