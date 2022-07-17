import React from 'react'
import { Link } from 'react-router-dom'

function TopArticleLIstItem() {
  return (    
    <Link to='/Article' className="item">
        <div id="__img">
            <img src={require('../../../img/istockphoto.jpg')} alt="" />
        </div>
        <div id="__title">
            <p>کاربردهای متنوع با هدف بهبود ابزارهای هدف بهبود ابزارهای کاربردی</p>
        </div>
    </Link>
  )
}

export default TopArticleLIstItem