import { FeaturedStories } from './Components/FeaturedStories';
import { HomeCTA } from './Components/HomeCTA';
import { News } from './Components/News';

function App() {
  return (
    <div className="page-wrapper">
      <FeaturedStories />
      <News />
      <HomeCTA />
    </div>
  );
}

export default App;
