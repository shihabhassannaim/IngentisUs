import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import AdvertiseMain from './Components/Advertise/AdvertiseMain';

function App() {
  return (
    <BrowserRouter className='bg-gray-200'>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/advertise" element={<AdvertiseMain/>}/>
        <Route path="/about" element={<about/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
