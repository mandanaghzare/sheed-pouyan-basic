import React from 'react';
import MainHeader from './header';
import AboutUs from './about-us';
import Lens from './lens';
import TextSlide from './text-slide';
import Products from './products';
import Attribute from './attribute';
import Articles from './articles';
import ContactUs from './contact-us';
import Footer from '../../public/js/footer';
import { 
  ScrollContainer,
  ScrollPage,} from 'react-scroll-motion';

function Main() {
  return (
    <div id="scroll-container">
      <ScrollContainer>
        <ScrollPage page={0}>
          <MainHeader />
        </ScrollPage>
      </ScrollContainer>
      <AboutUs />
      <Lens />
      {/* <TextSlide /> */}
      <Products />
      <Attribute />
      <Articles />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Main