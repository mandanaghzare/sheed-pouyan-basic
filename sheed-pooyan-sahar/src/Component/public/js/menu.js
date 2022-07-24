import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { show} from '../../../redux/features/activate/logInSlice';
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
import { useTranslation } from "react-i18next";


function Menu() {
  const state = useSelector((state) => state.logInPopUp.value)
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState(false);
  const openNavbar = () => {
    setShowNav(true);
  }
  const closeNavbar = () => {
    setShowNav(false);
  }

  const logInClick = () => {
    dispatch(show());
    setShowNav(false);
    console.log(state)
  }

  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState("fa");
  let ref = useRef()
  
  const handleLangChange = evt => {
    let lang = ref.current.value;
    
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="navbarMenu">
      <LogIn />
      <GiHamburgerMenu onClick={openNavbar} style={{display : showNav || state ? 'none' : ''}} />
        <nav className={showNav ? 'show' : ''}>
          <AiOutlineClose onClick={closeNavbar} className='close' />
          <div className="logo">
            <Link to="/"><img className="img-fluid" src={require("../../../img/logo.png")} alt="" /></Link>
          </div>
          <div className="menu">
            <ul className="list-unstyled">
              <li><Link to='/products'>{t("محصولات و خدمات")}</Link></li>
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
            <a ref={ref} onClick={handleLangChange} value="en" className="language">EN</a>
            <a onClick={logInClick} className="signIn">ورود</a>
          </div>
        </nav>
    </div>
  )
}

export default Menu