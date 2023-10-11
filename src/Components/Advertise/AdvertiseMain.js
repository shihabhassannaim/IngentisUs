import React from 'react';
import Advertise from './Advertise';
import CoreFeatures from './CoreFeatures';
import CoreFeaturesAnother from './CoreFeaturesAnother';
import Navbar from '../Header/Navbar';

const AdvertiseMain = () => {
    return (
        <div>
            <Navbar/>
            <Advertise/>
            <CoreFeatures/>
            <CoreFeaturesAnother/>
        </div>
    );
};

export default AdvertiseMain;