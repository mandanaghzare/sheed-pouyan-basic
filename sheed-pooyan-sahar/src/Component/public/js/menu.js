import React, { useState, useEffect, Fragment } from 'react';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../../public/css/responsive.css';

function Menu() {

  return (
        <nav className={`d-flex align-items-center`}>
          <div className="logo">
            <Link to="/"><img className="img-fluid" src={require("../../../img/logo.png")} alt="" /></Link>
          </div>
          <div className="menu">
            <ul className="list-unstyled d-flex">
              <li><Link to='/products'>محصولات و خدمات</Link></li>
              <li>|</li>
              <li><Link to='/blogs'>بلاگ</Link></li>
              <li>|</li>
              <li><Link to='/src/Component/cv/js/AboutUs.js'>درباره ما</Link></li>
              <li>|</li>
              <li><Link to='/career'>فرصت های شغلی</Link></li>
              <li>|</li>
              <li><Link to='/contact-us'>ارتباط با ما</Link></li>
            </ul>
          </div>
          <div id="_button">
            <a className="language">Eng</a>
            <a className="signIn">ورود</a>
          </div>
        </nav>
  )
}

export default Menu