import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import '../../public/css/style.css'
import '../../public/font/IranSans/css/styles.rtl.css';
import Menu from '../../public/js/Menu';
import { Parallax } from 'react-parallax';

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
    setHandleScroll(logoHeight);
	}
  // header cover height
  
  // rotate polygon
  const [rotatePolygon, setrotatePolygon] = useState();  
  useEffect(() => {
    window.addEventListener('scroll', ropoly);

    return () => {
      window.removeEventListener('scroll', ropoly);
    };
  }, []);
  const ropoly = () => {
		let scrollTop = window.scrollY,
				minDegree = 270,
				rotateDegree = Math.max(minDegree, 360 - scrollTop/5);
    setrotatePolygon(rotateDegree);
	}
  // rotate polygon

  // fade polygon
  const [fadePolygon, setfadePolygon] = useState();  
  useEffect(() => {
    window.addEventListener('scroll', fading);

    return () => {
      window.removeEventListener('scroll', fading);
    };
  }, []);
  const fading = () => {
		let scrollTop = window.scrollY,
				minDegree = 0,
				fadeDegree = Math.max(minDegree, 1 - scrollTop/1000);
    setfadePolygon(fadeDegree);
	}
  // fade polygon
  return (
    <header>
      <div className="backHeader">
        <Parallax bgImage={require("../../../img/istockphoto.jpg")} strength={500}>
          <div className={`headerCover ${stickyClass}`} style={{'height': handleScroll + "vh"}}>
            <Menu></Menu>
          </div>
        </Parallax>
      </div>
      <div className="polygon" style={{transform: `rotate3d(1, 0, 0, ${rotatePolygon}deg)`, opacity:fadePolygon}}>
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