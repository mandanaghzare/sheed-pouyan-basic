
import Main from './Component/main/js/Main';
import { ParallaxProvider } from 'react-scroll-parallax';
import CareerOpportunities from './Component/career-opportunities/js/CareerOpportunities';

function App() {
  return (
    <ParallaxProvider>
      <CareerOpportunities />
    </ParallaxProvider>
  );
}

export default App;
