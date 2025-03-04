import React from 'react';
import CustomChart from '../ProductChart/ProductChart';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className='text-center bg-[#9538E2] text-white py-20'>
                <h1 className='text-4xl font-bold'>Statistics</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <CustomChart></CustomChart>
        </div>
    );
};

export default Statistics;