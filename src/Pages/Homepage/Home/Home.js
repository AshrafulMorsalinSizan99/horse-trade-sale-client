import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <Categories></Categories>
        </div>
    );
};

export default Home;