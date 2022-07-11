import React, { useState, useEffect } from 'react';

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
    <nav className={`d-flex align-items-center`}>
      <div className="logo">
        <a><img className="img-fluid" src={require("../../../img/logo.png")} alt="" /></a>
      </div>
      <div className="menu">
        <ul className="list-unstyled d-flex">
          <li><a>محصولات و خدمات</a></li>
          <li>|</li>
          <li><a>بلاک</a></li>
          <li>|</li>
          <li><a>درباره ما</a></li>
          <li>|</li>
          <li><a>فرصت های شغلی</a></li>
          <li>|</li>
          <li><a>ارتباط با ما</a></li>
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