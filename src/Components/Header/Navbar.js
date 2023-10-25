import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png'

const Navbar = () => {
    return (
        <div>
                <div className='flex text-white sm:'>
                <div><img className=' sm:shrink-1' src={Logo} alt="" /></div>
                <div className='flex text-white sm:hidden ... lg:inline-flex '>
                <div className='mt-3 ml-32'><Link to='/home'>Home</Link></div>
                <div className='mt-3 ml-14'><Link to='/advertise'>Advertise</Link></div>
                <div className='mt-3 ml-14 '><Link to='/support'>Support</Link></div>
                <div className='mt-3 ml-14 '><Link to='/contact'>Contact</Link></div>
                <div className='mt-2 ml-40 '><button className='button py-1.5 px-4 rounded-3xl'>Get Started</button></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;