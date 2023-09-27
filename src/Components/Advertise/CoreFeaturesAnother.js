import React from 'react';
import CoreFeaturesAnotherPic from '../../Images/Core features another.png';
import successfullImage from '../../Images/workCompleted.png'

const CoreFeaturesAnother = () => {
    return (
        <div>
            <div className='flex mt-10 ml-32'>
                <div className='w-1/2 mt-20'>
                    <p className='text-sm font-bold'>CORE FEATURES</p>
                    <p className='text-3xl font-bold mt-5'>Smart Jackpots <br /> that you may love this <br />anytime & anywhere .</p>
                    <p className='text-sm mt-5 leading-6 tracking-wide'>Get your tests delivered at let home collect <br /> sample from the victory of the managments that <br />supplies best design system guidelines ever. Get <br /> your tests delivered at let home collect sample.</p>
                    <button className='mt-3 py-1 px-4 rounded-3xl border-2 border-solid bg-[#1F3E76] text-gray-300'>Get Started</button>
                </div>
                <div className='pr-24'>
                    <img src={CoreFeaturesAnotherPic} alt="" />
                </div>
            </div>
            <div className='mt-20 ml-32 mr-20 '>
                <p className='text-center text-3xl font-semibold'>3000+ Completed Work <br />
                    Which WE have Successfully Done</p>
                <img className='mt-10 ' src={successfullImage} alt="" />
            </div>
        </div>
    );
};

export default CoreFeaturesAnother;