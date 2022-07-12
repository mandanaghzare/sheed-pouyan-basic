import React, { useState } from 'react'
import CareerItem from './CareerItem'

function Careers() {

  const [showItem, setshowItem] = useState(false);
  const showCareer = () => {
      setshowItem(!showItem)
  }

  return (    
    <div className={`item${showItem ? ' show' : ''}`}>
        <div className="_title" onClick={showCareer}>توسعه دهنده وب</div>
        <CareerItem />
        <CareerItem />
    </div>
  )
}

export default Careers