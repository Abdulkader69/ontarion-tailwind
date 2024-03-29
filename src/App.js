import { FeaturedStories } from './Components/FeaturedStories';
import { HomeCTA } from './Components/HomeCTA';
import { HomeNewsletter } from './Components/HomeNewsletter';
import { News } from './Components/News';

function App() {
  return (
    <div className="page-wrapper">
      <FeaturedStories />
      <News />
      <HomeCTA />
      <HomeNewsletter />
    </div>
  );
}

export default App;
