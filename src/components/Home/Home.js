import React from 'react';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Banner from './Banner/Banner';

import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
        </div>
    );
};

export default Home;