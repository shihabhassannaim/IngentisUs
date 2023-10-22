import React from 'react';
import paypal from '../../Images/paypal.png'
import google from '../../Images/google.png'
import Dropbox from '../../Images/Dropbox.png'
import './Header.css'
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='Header pl-24 pt-5 bg-container'>
            <Navbar/>
            <div className='mt-24 text-white'>
                <div className='main-text header-text font-bold flex ml-9 text-5xl justify-start tracking-wider'><p>Experience Your<br/> Ultimate Digital <br />
Services</p></div>
                <div className='ml-10 mt-6 tracking-wider'><p>Get your blood tests delivered at let home collect sample <br /> from the victory of the managments that supplies best <br />
design system guidelines ever.</p></div>
                <div>
                    <div className='get-start mt-6 ml-10'><button className='button py-1.5 px-4 rounded-3xl bg-white text-black'>Get Started</button></div>
                </div>
                <div className='flex ml-10 mt-10 mb-20'>
                    <p className='text-slate-500'>Sponsored by :- </p>
                    <img className='h-6 ml-5 pt-2' src={paypal} alt="" />
                    <img className='h-6 ml-5 pt-2'src={google} alt="" />
                    <img className='h-6 ml-5 pt-2' src={Dropbox} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;