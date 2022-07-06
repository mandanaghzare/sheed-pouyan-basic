import React from 'react'
import Footer from '../../public/js/footer';
import Menu from '../../public/js/menu';
import '../css/style.css';
import Items from './newsItems';
import TopArticleLIstItem from './topArticleLIstItem';


function Articles() {
  return (
    <div className='Articles subComponent'>
        <Menu />
        <div id="_content">
            <div id="__discription">
                <h1>مقاله ها</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                <p>و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</p>
            </div>
            <div className="row">
                <div className="col-md-8" id='_rightOne'>
                    <div id="_options">
                        <div id="__category">
                            <button id='___news'>مقالات خبری</button>
                            <button id='___weblog'>وبلاگ</button>
                        </div>
                        <div id="__search">
                            <input type="text" name="" id="" placeholder='جستجو' />
                        </div>
                    </div>
                    <div id="_article_items">
                        <Items />
                        <Items />
                        <Items />
                        <Items />
                        <Items />
                        <Items />
                    </div>
                </div>
                <div className="col-md-4" id='_leftOne'>
                    <div className="position-sticky">
                        <h3>مقالات برگزیده</h3>
                        <div id="_list">
                            <TopArticleLIstItem />
                            <TopArticleLIstItem />
                            <TopArticleLIstItem />
                            <TopArticleLIstItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Articles