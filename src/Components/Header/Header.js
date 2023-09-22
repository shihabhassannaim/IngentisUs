import React from 'react';
import Logo from '../../Images/logo.png'
import paypal from '../../Images/paypal.png'
import google from '../../Images/google.png'
import Dropbox from '../../Images/Dropbox.png'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <div className='flex'>
                <div><img src={Logo} alt="" /></div>
                <div><h4>Home</h4></div>
                <div><h4>Advertise</h4></div>
                <div><h4>Support</h4></div>
                <div><h4>Contact</h4></div>
                <div><button>Get Started</button></div>
            </div>
            <div>
                <div><p>Experience your ultimate digital
Services</p></div>
                <div><p>Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best
design system guidelines ever.</p></div>
                <div>
                    <div><button>Get Started</button></div>
                </div>
                <div>
                    <p>sponsored by :- </p>
                    <img src={paypal} alt="" />
                    <img src={google} alt="" />
                    <img src={Dropbox} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;