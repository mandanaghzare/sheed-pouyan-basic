
import Main from './Component/main/js/Main';
import { ParallaxProvider } from 'react-scroll-parallax';
import Resume from './Component/cv/js/Resume';
import ContactUsPage from './Component/contact-us/js/ContactUs';

function App() {
  return (
    <ParallaxProvider>
      <ContactUsPage />
    </ParallaxProvider>
  );
}

export default App;
