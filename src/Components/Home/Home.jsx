import React from 'react';
import Banner from '../Banner/Banner';
import Catagoris from '../Ctagoris/Catagoris';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <Catagoris></Catagoris>
        </div>
    );
};

export default Home;