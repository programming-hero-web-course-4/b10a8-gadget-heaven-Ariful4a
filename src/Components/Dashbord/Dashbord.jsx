import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Dashbord = () => {

    const allProducts = useLoaderData();

    console.log(allProducts);
    return (
        <div>
            <h1>Dashbord</h1>
        </div>
    );
};

export default Dashbord;