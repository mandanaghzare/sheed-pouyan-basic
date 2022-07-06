
import Main from './Component/main/js/main';
import { ParallaxProvider } from 'react-scroll-parallax';
import Articles from './Component/articles/js/article';

function App() {
  return (
    <ParallaxProvider>
      <Articles />
    </ParallaxProvider>
  );
}

export default App;
