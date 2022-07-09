import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

function TextSlide() {
  return (
    <div className="text-slide">
        <Swiper
        direction={"vertical"}
        className="mySwiper"
        slidesPerView={3}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
       >            
        <SwiperSlide>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده</p>            
        </SwiperSlide>            
        <SwiperSlide>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده</p>            
        </SwiperSlide>            
        <SwiperSlide>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده</p>            
        </SwiperSlide>            
        <SwiperSlide>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده</p>            
        </SwiperSlide>
        <SwiperSlide>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده</p>            
        </SwiperSlide>            
        <SwiperSlide>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده</p>            
        </SwiperSlide>            
        <SwiperSlide>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده</p>            
        </SwiperSlide>
        <SwiperSlide>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده</p>            
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TextSlide