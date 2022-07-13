
import Main from './Component/main/js/Main';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Route, Routes } from 'react-router-dom';
import Articles from './Component/articles/js/Articles';
import Careers from './Component/career-opportunities/js/CareerOpportunities';
import ContactUsPage from './Component/contact-us/js/ContactUs';
import Resume from './Component/cv/js/Resume';

function App() {
  return (    
    <Routes>
      <Route exact path='/' element={<Main />} />
      <Route exact path='/blogs' element={<Articles />} />
      <Route exact path='/career' element={<Careers />} />
      <Route exact path='/contact-us' element={<ContactUsPage />} />
      <Route exact path='/resume' element={<Resume />} />
    </Routes>
    // <ParallaxProvider>
    //   <ContactUsPage />
    // </ParallaxProvider>
  );
}

export default App;
