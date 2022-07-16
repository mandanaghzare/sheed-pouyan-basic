import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import { AiOutlineCalendar } from 'react-icons/ai'

export default function Articles() {
  return (
    <div className="articleSlider">
      <h2>مقالات</h2>
      <Swiper
        direction={"horizontal"}
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        speed={1000}
        preventInteractionOnTransition={false}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <a>
            <img src={require('../../../img/istockphoto-11.jpg')} />
            <div id="_article_content">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفه...</p>
              <span><AiOutlineCalendar /> 20 خرداد</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src={require('../../../img/istockphoto-12.jpg')} />
            <div id="_article_content">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفه...</p>
              <span><AiOutlineCalendar /> 20 خرداد</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src={require('../../../img/Music_Icon.jpg')} />
            <div id="_article_content">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفه...</p>
              <span><AiOutlineCalendar /> 20 خرداد</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src={require('../../../img/istockphoto-11.jpg')} />
            <div id="_article_content">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفه...</p>
              <span><AiOutlineCalendar /> 20 خرداد</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src={require('../../../img/istockphoto-12.jpg')} />
            <div id="_article_content">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفه...</p>
              <span><AiOutlineCalendar /> 20 خرداد</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src={require('../../../img/Music_Icon.jpg')} />
            <div id="_article_content">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفه...</p>
              <span><AiOutlineCalendar /> 20 خرداد</span>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
      <button id="_yellow_btn"><span>بیشتر</span></button>
    </div>
  );
}