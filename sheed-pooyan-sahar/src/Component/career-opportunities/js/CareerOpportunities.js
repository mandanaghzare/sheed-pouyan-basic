import React, { useState, useId } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../public/js/Footer';
import Menu from '../../public/js/Menu';
import Careers from './Careers';

function CareerOpportunities() {

  return (
    <div className='careerOpportunities subComponent'>
        <Menu />
        <div id="_header">
            <div id="__image">
                <img src={require('../../../img/photo-157.jpg')} alt="" />
                <div id="__cover"></div>
                <p id="__text">لورم ایپسوم متن ساختگی با تولید سادگی</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="position-sticky">
                    <p>درخواست خود را برای آگهی های انتخاب شده ارسال کنید</p>
                    <div id="_buttons">
                        <button type="">ارسال</button>
                        <Link to="/resume">ویرایش  اطلاعات</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-8">                
                <div id="_search">
                    <input type="text" name="" id="" placeholder='جستجو عنوان شغلی' />
                </div>
                <div id="_careers">
                    <Careers />
                    <Careers />
                    <Careers />
                    <Careers />
                    <Careers />
                    <Careers />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default CareerOpportunities