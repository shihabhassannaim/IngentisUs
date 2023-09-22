import React from 'react';
import Logo from '../../Images/logo.png'
import paypal from '../../Images/paypal.png'
import google from '../../Images/google.png'
import Dropbox from '../../Images/Dropbox.png'
import './Header.css'

const Header = () => {
    return (
        <div className='Header pl-24 pt-5 bg-container'>
            <div className='flex text-white'>
                <div ><img src={Logo} alt="" /></div>
                <div className='mt-3 ml-32'><h4>Home</h4></div>
                <div className='mt-3 ml-14'><h4>Advertise</h4></div>
                <div className='mt-3 ml-14'><h4>Support</h4></div>
                <div className='mt-3 ml-14'><h4>Contact</h4></div>
                <div className='mt-2 ml-40 '><button className='button py-1.5 px-4 rounded-3xl'>Get Started</button></div>
            </div>
            <div className='mt-24 text-white'>
                <div className='header-text font-bold flex ml-9 text-5xl justify-start tracking-wider'><p>Experience Your<br/> Ultimate Digital <br />
Services</p></div>
                <div className='ml-10 mt-6 tracking-wider'><p>Get your blood tests delivered at let home collect sample <br /> from the victory of the managments that supplies best <br />
design system guidelines ever.</p></div>
                <div>
                    <div className='mt-6 ml-10'><button className='button py-1.5 px-4 rounded-3xl bg-white text-black'>Get Started</button></div>
                </div>
                <div className='flex ml-10 mt-10'>
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