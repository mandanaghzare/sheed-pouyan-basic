import React from 'react';
import MainHeader from './header.js';
import AboutUs from './about-us.js';
import Lens from './lens.js';
import Products from './products.js';
import Attribute from './attribute.js';
import Articles from './articles.js';
import ContactUs from './contact-us.js';
import Footer from '../../public/js/footer.js';
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