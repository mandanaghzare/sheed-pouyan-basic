import React from 'react';
import '../css/style.css';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { active, deActive } from '../../../redux/features/activate/activateSlice';
import {hide} from '../../../redux/features/activate/logInSlice'

function LogIn(props) {
    const state = useSelector((state) => state.activate.value);
    const logState = useSelector((state) => state.logInPopUp.value);
    const dispatch = useDispatch()
    const regClick = () => {
        dispatch(deActive())
    }
    const logClick = () => {
        dispatch(active())
    }
  
  const closeClick = () => {
    dispatch(hide())
  }
  return (
    <div className="login" id={logState ? "show" : ""}>
        <div onClick={closeClick} className="back"><BsArrowRight /></div>
        <div className="right">
            <form className="logInForm" id={state ? "show" : ""}>
                <h2>ورود به حساب کاربری</h2>
                <input type="email" placeholder='ایمیل' />
                <input type="password" placeholder='رمز عبور' />
                <a id="recovery" href="">فراموشی رمز عبور</a>
                <div className="signInBtn w-100">
                    <button>ورود</button>
                </div>
                <span>یا</span>
                <div className="registerBtn">
                    <a onClick={regClick}>عضویت</a>
                </div>
            </form>
            <form className="registerForm" id={!state ? "show" : ""}>
                <h2>ساخت حساب کاربری جدید</h2>
                <input type="text" placeholder='نام و نام خانوادگی' />
                <input type="email" placeholder='ایمیل' />
                <input type="password" placeholder='رمز عبور' />
                <input type="password" placeholder='تایید رمز عبور' />
                <div className="signInBtn w-100">
                    <button>عضویت</button>
                </div>
                <span>یا</span>
                <div className="registerBtn">
                    <a onClick={logClick}>وارد شوید</a>
                </div>
            </form>
        </div>
        <div className="welcome">
            <img src={require('../../../img/logo.png')} alt="" />
            <p>به سایت شید پویان سحر خوش آمدید</p>
        </div>
    </div>
  )
}

export default LogIn