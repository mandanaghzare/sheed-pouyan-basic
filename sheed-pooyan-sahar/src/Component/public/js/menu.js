import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { active, deActive } from '../../../redux/features/activate/activateSlice';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../../article/css/style.css';
import '../../articles/css/style.css';
import '../../career-opportunities/css/style.css';
import '../../contact-us/css/style.css';
import '../../cv/css/style.css';
import '../../main/css/style.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';
import LogIn from './LogIn';


function Menu() {
  const state = useSelector((state) => state.activate.value)
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState([false]);
  const openNavbar = () => {
    setShowNav(true);
  }
  const closeNavbar = () => {
    setShowNav(false);
  }

  const[logIn, setLogIn] = useState(false);
  const logInClick = () => {
    setLogIn(true);
    console.log(logIn)
  }

  return (
    <div className="navbarMenu">
      <LogIn props={logIn} func={setLogIn} />
      <GiHamburgerMenu onClick={openNavbar} style={{display : showNav ? 'none' : ''}} />
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
            <a onClick={logInClick} className="signIn">ورود</a>
          </div>
        </nav>
    </div>
  )
}

export default Menu