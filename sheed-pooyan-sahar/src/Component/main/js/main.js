import React from 'react';
import MainHeader from './Header';
import AboutUs from './About-us';
import Lens from './Lens';
import Products from './Products';
import Attribute from './Attribute';
import Articles from './Articles';
import ContactUs from './Contact-us';
import Footer from '../../public/js/Footer';
import { 
  ScrollContainer,
  ScrollPage,} from 'react-scroll-motion';
import ChooseLang from '../../pemiere/js/ChooseLang';

function Main() {
  return (
    <div id="scroll-container">
      <ChooseLang />
      <ScrollContainer>
        <ScrollPage page={0}>
          <MainHeader />
        </ScrollPage>
      </ScrollContainer>
      <AboutUs />
      <Lens />
      <Products />
      <Attribute />
      <Articles />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Main