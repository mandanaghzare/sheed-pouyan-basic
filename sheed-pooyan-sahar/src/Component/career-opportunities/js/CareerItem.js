import React, { useState, useId } from 'react';
import {FiChevronUp} from 'react-icons/fi';

function CareerItem() {
    const [showSub, setShowSub] = useState(false);
    const subCareer = () => {
        setShowSub(!showSub)
    }

    const id = useId()
  return (    
    <div className="_item">
        <div className="__item_title">
            <input type="checkbox" id={id} />
            <label htmlFor={id}></label>
            <span onClick={subCareer}>Senior Front-End-Developer <FiChevronUp className={`${showSub ? 'down' : ''}`} /></span>
        </div>
        <div className={`_item_requires ${showSub ? 'show' : ''}`}>
            <p>مسلط به :</p>
            <ul className="unstyled-list">
                <li>react</li>
                <li>sass</li>
                <li>git</li>
                <li>rest api</li>
            </ul>
        </div>
    </div>
  )
}

export default CareerItem