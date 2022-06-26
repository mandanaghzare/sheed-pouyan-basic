import './App.css';
import Main from './Component/main/js/main';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Main></Main>
    </ParallaxProvider>
  );
}

export default App;
