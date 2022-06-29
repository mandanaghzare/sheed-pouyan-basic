import React, {useState, useEffect} from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';

function Attribute() {

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
    <div className='attribute'>        
      <div className="outter" style={{transform: `rotate(${(Math.trunc(rotatePolygon)*45) - 20}deg)`}}>
        <div className="inner">
            <img style={{transform: `rotate(${(-Math.trunc(rotatePolygon)*45) - 20}deg)`}} src={require('../../../img/361ba8f8.jpg')} alt="" />
        </div>
      </div>
      <ul>
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