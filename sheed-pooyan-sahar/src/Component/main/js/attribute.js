import React from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';

function Attribute() {
  return (
    <div className='attribute'>        
      <div className="outter">
        <div className="inner">
            <img src={require('../../../img/361ba8f8.jpg')} alt="" />
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