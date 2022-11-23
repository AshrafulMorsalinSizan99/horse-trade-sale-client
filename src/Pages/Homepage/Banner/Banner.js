import React from 'react';
import banner from '../../../assets/banner.png';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse mt-6">
                <img src={banner} alt='' className=" rounded-lg w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Resale Used Mobiles!</h1>
                    <p className="py-6">In our websites, we are selling used mobiles which is in fresh conditions to use. You can get used phones of any company you prefer. Do visit us and crack your desired mobiles. Hoping to give you the best services. </p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;