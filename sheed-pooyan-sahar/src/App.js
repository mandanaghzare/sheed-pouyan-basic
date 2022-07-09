
import Main from './Component/main/js/Main';
import { ParallaxProvider } from 'react-scroll-parallax';
import Article from './Component/article/js/Article';

function App() {
  return (
    <ParallaxProvider>
      <Article />
    </ParallaxProvider>
  );
}

export default App;
