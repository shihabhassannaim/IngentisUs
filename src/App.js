import './App.css';
import Advertise from './Components/Advertise/Advertise';
import CoreFeatures from './Components/Advertise/CoreFeatures';
import CoreFeaturesAnother from './Components/Advertise/CoreFeaturesAnother';
import MoreAbout from './Components/Advertise/MoreAbout';
import Home from './Components/Home/Home';
import Testimunial from './Components/Testimunial/Testimunial';

function App() {
  return (
    <div>
      <Home />
      <Advertise />
      <CoreFeatures />
      <CoreFeaturesAnother />
      <MoreAbout />
      <Testimunial />
    </div>
  );
}

export default App;
