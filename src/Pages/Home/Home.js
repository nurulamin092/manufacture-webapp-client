import React from 'react';
import HomeBanner from './HomeBanner';
import Info from './Info';
import Products from './Products';

const Home = () => {
    return (
        <div className=''>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <Info></Info>
        </div>
    );
};

export default Home;