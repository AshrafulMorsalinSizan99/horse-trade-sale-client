import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ExtraSection from '../ExtraSection/ExtraSection';
import './Home.css';

const Home = () => {
    return (
        <div className='mx-5 home'>
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <Categories></Categories>
        </div>
    );
};

export default Home;