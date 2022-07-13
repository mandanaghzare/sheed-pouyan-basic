import React from 'react';
import Footer from '../../public/js/Footer';
import Menu from '../../public/js/Menu';
import '../css/style.css';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function ContactUsPage() {
  return (
    <div className="contactUs subComponent">
       <Menu />
        <div id="_content">
            <form action="">
                <h1>ارتباط با شید پویان سحر</h1>
                <input type="text" placeholder="عنوان" />
                <textarea placeholder="پیام خود را بنویسید..."></textarea>
                <div className="button">
                    <button type="">ارسال</button>
                </div>
            </form>            
            <a href="tel:09121234567">09121234567 <BsTelephone /></a>
            <a href="mailto:name@gmail.com">EMAIL@YAHOO.COM <AiOutlineMail /></a>
        </div>
       <Footer /> 
    </div>
  )
}

export default ContactUsPage