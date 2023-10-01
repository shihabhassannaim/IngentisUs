import './App.css';
import About from './Components/About/About';
import Advertise from './Components/Advertise/Advertise';
import CoreFeatures from './Components/Advertise/CoreFeatures';
import CoreFeaturesAnother from './Components/Advertise/CoreFeaturesAnother';
import MoreAbout from './Components/Advertise/MoreAbout';
import Home from './Components/Home/Home';
import Testimunial from './Components/Testimunial/Testimunial';

function App() {
  return (
    <div className='bg-gray-200'>
      <Home />
      <Advertise />
      <CoreFeatures />
      <CoreFeaturesAnother />
      <MoreAbout />
      <Testimunial />
      <About/>
    </div>
  );
}

export default App;
