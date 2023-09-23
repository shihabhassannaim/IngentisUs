import React from 'react';
import AppDevelopment from '../../Images/appDevelopment.png'
import WebDevelopment from '../../Images/WebDevelopment.png'
import digitalMarketing from '../../Images/Digital campaign.png'

const Advertise = () => {
    return (
        <div>
            <div>
                <p>Quality features.</p>
                <p>Meet exciting feature of services</p>
            </div>
            <div>
                <div>
                    <img src={AppDevelopment} alt="" />
                    <h3>App Development.</h3>
                    <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                </div>
                <div>
                <img src={WebDevelopment} alt="" />
                    <h3>Web Development.</h3>
                    <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                </div>
                <div>
                <img src={digitalMarketing} alt="" />
                    <h3>Digital Marketing</h3>
                    <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                </div>
            </div>
        </div>
    );
};

export default Advertise;