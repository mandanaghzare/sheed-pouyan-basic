import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import '../../public/css/style.css'
import '../../public/font/IranSans/css/styles.rtl.css';
import Menu from '../../public/js/menu';
import { Parallax } from 'react-parallax';
import  { ScrollRotate } from 'react-scroll-rotate';

function MainHeader() {

  // header cover class
  const [stickyClass, setStickyClass] = useState('relative');
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 30 ? setStickyClass('fixed') : setStickyClass('relative');
    }
  };
  // header cover class

  // header cover height
  const [handleScroll, setHandleScroll] = useState();  
  useEffect(() => {
    window.addEventListener('scroll', heightChange);

    return () => {
      window.removeEventListener('scroll', heightChange);
    };
  }, []);
  const heightChange = () => {
		let scrollTop = window.scrollY,
				minHeight = 10,
				logoHeight = Math.max(minHeight, 71 - scrollTop/10);
        console.log(logoHeight)
    setHandleScroll(logoHeight);
	}
  // header cover height

  // header cover height
  const [rotatePolygon, setrotatePolygon] = useState();  
  useEffect(() => {
    window.addEventListener('scroll', heightChange);

    return () => {
      window.removeEventListener('scroll', heightChange);
    };
  }, []);
  const ropoly = () => {
		let scrollTop = window.scrollY,
				minDegree = 0,
				rotateDegree = Math.max(minDegree, 360 - scrollTop/10);
        console.log(rotateDegree)
    setHandleScroll(rotateDegree);
	}
  // header cover height

  return (
    <header>
      <div className="backHeader">
        <Parallax bgImage={require("../../../img/istockphoto.jpg")} strength={500}>
          <div className={`headerCover ${stickyClass}`} style={{'height': handleScroll + "%"}}>
            <Menu></Menu>
          </div>
        </Parallax>
      </div>
      <div className="polygon">
        <div className="outter">
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          <div className="inner">
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader;