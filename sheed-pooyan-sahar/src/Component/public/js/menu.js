import React, { useState, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function Menu() {
  // const [stickyClass, setStickyClass] = useState('relative');
  // useEffect(() => {
  //   window.addEventListener('scroll', stickNavbar);

  //   return () => {
  //     window.removeEventListener('scroll', stickNavbar);
  //   };
  // }, []);

  // const stickNavbar = () => {
  //   if (window !== undefined) {
  //     let windowHeight = window.scrollY;
  //     windowHeight > 100 ? setStickyClass('fixed') : setStickyClass('relative');
  //   }
  // };

  return (
    <Router>
      <nav className={`d-flex align-items-center`}>
        <div className="logo">
          <a><img className="img-fluid" src={require("../../../img/logo.png")} alt="" /></a>
        </div>
        <div className="menu">
          <ul className="list-unstyled d-flex">
            <li><Link to='/src/Component/main/js/Main.js'>محصولات و خدمات</Link></li>
            <li>|</li>
            <li><Link to='/src/Component/articles/js/Articles.js'>بلاگ</Link></li>
            <li>|</li>
            <li><Link to='/src/Component/cv/js/Resume.js'>درباره ما</Link></li>
            <li>|</li>
            <li><Link to='/src/Component/career-opportunities/js/CareerOpportunities.js'>فرصت های شغلی</Link></li>
            <li>|</li>
            <li><Link to='/src/Component/contact-us/js/ContactUs.js'>ارتباط با ما</Link></li>
          </ul>
        </div>
        <div id="_button">
          <a className="language">Eng</a>
          <a className="signIn">ورود</a>
        </div>
      </nav>
    </Router>
  )
}

export default Menu