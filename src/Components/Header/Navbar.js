import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [icon , setIcon] = useState(false);
    const showIcon = () => {
       console.log(icon);
       setIcon(!icon);
   }
    return (
        <div>
                <div className='flex text-white'>
                <div className=' md:shrink-0 mr-16 lg:mr-24 xl:mr-72 2xl:mr-64 ' ><img src={Logo} alt="" /></div>
                <ul className={`text-white md:inline-flex space-x-8 lg:space-x-16 xl:space-x-24 2xl:space-x-40 ${icon ? 'hidden' : 'block'}`}>
                <li className='mt-3 '><Link to='/home'>Home</Link></li>
                <li className='mt-3 '><Link to='/advertise'>Advertise</Link></li>
                <li className='mt-3  '><Link to='/support'>Support</Link></li>
                <li className='mt-3  '><Link to='/contact'>Contact</Link></li>
                <li className='mt-2  '><button className='button py-1.5 px-4 rounded-3xl'>Get Started</button></li>
                </ul>
                <button className='md:hidden static absolute right-10 top-8' onClick={showIcon}>{icon ? <MenuIcon/> : <CloseIcon/>}</button>
            </div>
        </div>
    );
};

export default Navbar;