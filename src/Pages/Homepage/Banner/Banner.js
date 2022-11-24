import React from 'react';


const Banner = () => {
    return (
        <div className="hero min-h-screen mb-5 mt-5" style={{ backgroundImage: `url("https://fscl01.fonpit.de/userfiles/6727621/image/2nd_YEAR/best_smartphones/AndroidPIT-best-smartphones-3-a-w1400h1050.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Resale Used Mobiles</h1>
                    <p className="mb-5">We provide fresh used phone with reasonable price.Visit us and get to know about us more.You won't be disappointed</p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;