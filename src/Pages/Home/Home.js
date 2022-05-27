import React from 'react';
import BusinessSummary from './BusinessSummary';
import HomeBanner from './HomeBanner';
import Info from './Info';
import Products from './Products';
import Reviews from './Reviews';
import Contract from './Contract';
const Home = () => {
    return (
        <div className=''>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Info></Info>
            <Reviews></Reviews>
            <Contract></Contract>
        </div>
    );
};

export default Home;