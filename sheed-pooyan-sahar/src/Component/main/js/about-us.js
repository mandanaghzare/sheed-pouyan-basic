import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  })

  return (
    <div className="main-about-us" data-aos="zoom-in-up">
        <div id="_square_text_box">
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که</p>
            <button id="_yellow_btn"><span>بیشتر</span></button>
        </div>
    </div>
  )
}

export default AboutUs