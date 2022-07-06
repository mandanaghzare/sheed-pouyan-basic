import React, {useState, useEffect, useRef} from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';

function Attribute() {
  let elementRef = useRef()
  let polyref = useRef()
  let ulRef = useRef()
  useEffect(() => {
    let elementTop = elementRef.current.offsetTop;
    let firstElement = elementTop + 200;
    let secondElement = elementTop + 400;
    let thirdElement = elementTop + 600;
    let forthElement = elementTop + 800;
    if(window.scrollY > elementTop){
      ulRef.current.children[0].style.opacity = 1
      ulRef.current.children[0].style.transform = 'none'
    }else{
      ulRef.current.children[0].style.opacity = 0
      ulRef.current.children[0].style.transform = 'translateX(100px)'
    }
    if(window.scrollY > firstElement){
      ulRef.current.children[1].style.opacity = 1
      ulRef.current.children[1].style.transform = 'none'
    }else{
      ulRef.current.children[1].style.opacity = 0
      ulRef.current.children[1].style.transform = 'translateX(100px)'
    }
    if(window.scrollY > secondElement){
      ulRef.current.children[2].style.opacity = 1
      ulRef.current.children[2].style.transform = 'none'
    }else{
      ulRef.current.children[2].style.opacity = 0
      ulRef.current.children[2].style.transform = 'translateX(100px)'
    }
    if(window.scrollY > thirdElement){
      ulRef.current.children[3].style.opacity = 1
      ulRef.current.children[3].style.transform = 'none'
    }else{
      ulRef.current.children[3].style.opacity = 0
      ulRef.current.children[3].style.transform = 'translateX(100px)'
    }
    if(window.scrollY > forthElement){
      ulRef.current.children[4].style.opacity = 1
      ulRef.current.children[4].style.transform = 'none'
    }else{
      ulRef.current.children[4].style.opacity = 0
      ulRef.current.children[4].style.transform = 'translateX(100px)'
    }
  })

  // // Aos
  // useEffect(() => {
  //   Aos.init({ duration: 10000 })
  // })
  // // Aos

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
    minDegree = 0,
    rotateDegree = Math.max(minDegree, scrollTop/100);
    setrotatePolygon(rotateDegree);
	}
  // rotate polygon

  return (
    <div className='attribute' ref={elementRef}>        
      <div ref={polyref} className="outter" style={{transform: `rotate(${(-Math.trunc(rotatePolygon)*45) - 20}deg)`}}>
        <div className="inner">
            <img style={{transform: `rotate(${(Math.trunc(rotatePolygon)*45) - 20}deg)`}} src={require('../../../img/361ba8f8.jpg')} alt="" />
        </div>
      </div>
      <ul ref={ulRef}>
        <li><AiFillCaretLeft />ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</li>
        <li><AiFillCaretLeft />لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</li>
        <li><AiFillCaretLeft />لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم متن ساختگی</li>
        <li><AiFillCaretLeft /> ایپسوم متن ساختگی با لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</li>
        <li><AiFillCaretLeft />ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</li>
      </ul>
    </div>
  )
}

export default Attribute