import React from 'react';
import rattings from '../../Images/Ratting.png'
import myImage from '../../Images/my image.jpg'


const Testimunial = () => {
    return (
        <div className='ml-10'>
            <p className='text-center'>TESTIMUNIAL</p>
            <p className='text-center'>Meet Client Satisfaction</p>
            <div className=''>
                <div className='w'>
                    <img src={rattings} alt="" />
                    <p>Modern look & trending design</p>
                    <p>Get working experience to work with this <br /> amazing team & in future want to work <br />together for bright future projects and also <br /> make deposit to freelancer.</p>
                    <div className='flex'>
                        <img className='h-10 w-10 rounded-full' src={myImage} alt="" />
                        <div>
                            <p>Shihab Hassan</p>
                            <p>@sihab.69</p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Testimunial;