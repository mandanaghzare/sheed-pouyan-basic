import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../../public/css/responsive.css';

function Menu() {
  const [showNav, setShowNav] = useState(false);
  const openNavbar = () => {
    setShowNav(true);
  }
  const closeNavbar = () => {
    setShowNav(false);
  }
  return (
    <div className="navbarMenu">
      <GiHamburgerMenu onClick={openNavbar} />
        <nav className={showNav ? 'show' : ''}>
          <AiOutlineClose onClick={closeNavbar} className='close' />
          <div className="logo">
            <Link to="/"><img className="img-fluid" src={require("../../../img/logo.png")} alt="" /></Link>
          </div>
          <div className="menu">
            <ul className="list-unstyled">
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
    </div>
  )
}

export default Menu