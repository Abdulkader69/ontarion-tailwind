import { FeaturedStories } from './Components/FeaturedStories';
import { HomeCTA } from './Components/HomeCTA';
import { HomeNewsletter } from './Components/HomeNewsletter';
import { News } from './Components/News';
import { SportsHealth } from './Components/SportsHealth';

function App() {
  return (
    <div className="page-wrapper pt-[190px]">
      <FeaturedStories />
      <News />
      <HomeCTA />
      <HomeNewsletter />
      <SportsHealth />
    </div>
  );
}

export default App;
