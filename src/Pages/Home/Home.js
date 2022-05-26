import React from 'react';
import HomeBanner from './HomeBanner';
import Info from './Info';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className=''>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <Info></Info>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;