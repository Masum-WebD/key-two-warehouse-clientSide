import React from 'react';
import Products from '../Products/Products';
import ProductSell from '../ProductSell/ProductSell';
import Review from '../Review/Review';
import Banner from './Banner/Banner';

import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ProductSell></ProductSell>
            <Review></Review>
        </div>
    );
};

export default Home;