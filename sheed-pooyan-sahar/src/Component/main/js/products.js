import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Products() {
  return (
    <div className="main-products">
        <h2>محصولات</h2>
        <div id="_imgSlider">
        <Swiper
            data-fesa-num="8"
            // direction={"horizontal"}
            slidesPerView={1.4}
            // spaceBetween={30}
            loop={true}
            centeredSlides={true}
            speed={1000}
            mousewheel={true}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              1600: {
                slidesPerView: 7.8,
              },
              1200: {
                slidesPerView: 5.8,
              },
              991: {
                slidesPerView: 4.8,
              },
              768: {
                slidesPerView: 3.8,
              },
              576: {
                slidesPerView: 2.8,
              },
            }}
        >
                <SwiperSlide className="slideItem">
                    <a><img src={require('../../../img/photo-14.jpg')} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide className="slideItem">
                    <a><img src={require('../../../img/photo-15.jpg')} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide className="slideItem">
                    <a><img src={require('../../../img/photo-16.jpg')} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide className="slideItem">
                    <a><img src={require('../../../img/photo-14.jpg')} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide className="slideItem">
                    <a><img src={require('../../../img/photo-15.jpg')} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide className="slideItem">
                    <a><img src={require('../../../img/photo-16.jpg')} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide className="slideItem">
                    <a><img src={require('../../../img/photo-14.jpg')} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide className="slideItem">
                    <a><img src={require('../../../img/photo-15.jpg')} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide className="slideItem">
                    <a><img src={require('../../../img/photo-16.jpg')} alt="" /></a>
                </SwiperSlide>
        </Swiper>
        </div>
      <button id="_yellow_btn"><span>بیشتر</span></button>
    </div>
  )
}

export default Products