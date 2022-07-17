import React, { useState } from 'react';
import Menu from '../../public/js/Menu';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import { BsSuitHeartFill } from 'react-icons/bs';
import { FaRegCommentAlt } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { AiOutlineLinkedin } from 'react-icons/ai';
import TopArticleLIstItem from '../../articles/js/TopArticleLIstItem';
import LastArticlesItem from '../../articles/js/LastArticlesItem';
import Footer from '../../public/js/Footer';
import {
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";


function Article() {
  const [showSm, setShowSm] = useState(false);
  const socialMedia = () => {
    setShowSm(!showSm);
  }
  
  const [showCm, setShowCm] = useState(false);
  const comments = () => {
    setShowCm(!showCm);
  }

  const [redHeart, setRedHeart] = useState(false);
  const heartIcon = () => {
    setRedHeart(!redHeart);
  }

  return (
    <div className="subComponent article">
      <Menu />
      <article>
          <div id="_header">
            <div id="__img">
              <img src={require('../../../img/article-head.jpg')} alt="" />
            </div>
            <div id="__title">
              <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</h1>
              <div id="__details">
                <span><AiOutlineUser />ماندانا زارع</span>
                <span><AiOutlineCalendar />20 خرداد</span>
              </div>
            </div>
          </div>
          <div id="_content">
            <div className="row">
              <div className="col-md-8" id='_rightOne'>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با راستفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله درستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته</p><p> اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و </p><p>مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <div id="__middle_image">
                  <img src={require('../../../img/middle-image.jpg')} alt="" />
                  <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون</span>
                </div>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با راستفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله درستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته</p>
                <div id="__extra_speech">
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با راستفاده از طراحان گرافیک است</p>
                </div>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با راستفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله درستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی</p>
                <div id="_footer">
                  <button onClick={comments}><FaRegCommentAlt /></button>
                  <button onClick={heartIcon}><BsSuitHeartFill className={`${redHeart ? 'red' : '' }`} /></button>
                  <button onClick={socialMedia}><BsShare />
                    <div id="__social_media" className={`${showSm ? 'show' : ''}`}>
                      <TwitterShareButton><AiOutlineLinkedin /></TwitterShareButton>
                      <TelegramShareButton><FiTwitter /></TelegramShareButton>
                      <LinkedinShareButton><AiOutlineInstagram /></LinkedinShareButton>
                      <WhatsappShareButton url={'https://seebmagazine.com/skin-care-for-teens/'}><ImWhatsapp /></WhatsappShareButton>
                    </div>
                  </button>
                </div>
                <div id="_comment" className={`${showCm ? 'show' : ''}`}>
                  <textarea rows="" cols="" placeholder='نظر خود را بنویسید...'></textarea>
                  <button>ثبت نظر</button>
                </div>
              </div>
              <aside className="col-md-4" id='_leftOne'>
                  <div id="__search">
                      <input type="text" name="" id="" placeholder='جستجو' />
                  </div>
                  <div id="__lastArticle">
                    <h3>آخرین مقالات</h3>
                    <div id="_list">
                        <LastArticlesItem />
                        <LastArticlesItem />
                        <LastArticlesItem />
                        <LastArticlesItem />
                    </div>
                    <button>بیشتر</button>
                  </div>
                  <div id="__topArticle">
                    <h3>مقالات برگزیده</h3>
                    <div id="_list">
                        <TopArticleLIstItem />
                        <TopArticleLIstItem />
                        <TopArticleLIstItem />
                        <TopArticleLIstItem />
                    </div>
                    <button>بیشتر</button>
                  </div>
              </aside>
            </div>
          </div>
      </article>
      <Footer />
    </div>
  )
}

export default Article