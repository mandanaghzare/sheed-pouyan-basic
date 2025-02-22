import React from 'react'
import { Link } from 'react-router-dom'

function Items() {
  return (    
    <Link to="/Article" className='item'>
        <div id="__img">
            <img src={require('../../../img/articleImg.jpeg')} alt="" />
        </div>
        <div id="__titr">و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی</div>
        <div id="__date"><i className="fa-solid fa-calendar-days"></i><span>20 خرداد</span></div>
        <div id="__summary">
            <p> و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی ر شصت و سهکتابهای زیادیمی باشد، ر شصت و سهکتابهای زیادی در شصت و سه درصد گذشلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،ته حال و آینده</p>
            <a href="">بیشتر</a>
        </div>
    </Link>
  )
}

export default Items