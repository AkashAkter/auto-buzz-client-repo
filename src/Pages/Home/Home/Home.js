import React from 'react';
import Body from '../Body/Body';
import Categories from '../Category/Categories';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Body></Body>
        </div>
    );
};

export default Home;