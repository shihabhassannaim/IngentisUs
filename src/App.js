import './App.css';
import Advertise from './Components/Advertise/Advertise';
import CoreFeatures from './Components/Advertise/CoreFeatures';
import CoreFeaturesAnother from './Components/Advertise/CoreFeaturesAnother';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Home />
      <Advertise />
      <CoreFeatures />
      <CoreFeaturesAnother />
    </div>
  );
}

export default App;
