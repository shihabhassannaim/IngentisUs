import React from 'react';
import AppDevelopment from '../../Images/appDevelopment.png'
import WebDevelopment from '../../Images/WebDevelopment.png'
import digitalMarketing from '../../Images/Digital campaign.png'
import Header from '../Header/Header';

const Advertise = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <p className='text-[#244886] text-xl tracking-widest'>Quality features.</p>
                <p className='text-5xl font-semibold mt-4'>Meet exciting feature of services</p>
            </div>
            <div className='flex ml-16 text-center mt-20'>
                <div className='w-1/3'>
                    <img className='ml-36 mb-10 h-24 w-24' src={AppDevelopment} alt="" />
                    <h3 className='font-bold text-xl mb-10'>App Development.</h3>
                    <p className='text-[#343D48] tracking-wide'>Get your blood tests delivered at <br /> home collect a sample from the <br />your blood tests.</p>
                </div>
                <div className='w-1/3'>
                <img className='ml-36 mb-10 h-24 w-24' src={WebDevelopment} alt="" />
                    <h3 className='font-bold text-xl mb-10'>Web Development.</h3>
                    <p className='text-[#343D48] tracking-wide'>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                </div>
                <div className='w-1/3'>
                <img className='ml-36 mb-10 h-24 w-24' src={digitalMarketing} alt="" />
                    <h3 className='font-bold text-xl mb-10'>Digital Marketing</h3>
                    <p className='text-[#343D48] tracking-wide'>Get your blood tests delivered at <br /> home collect a sample from the <br />your blood tests.</p>
                </div>
            </div>
        </div>
    );
};

export default Advertise;