import React, { useEffect, useState } from 'react';
import Catagori from '../Ctagori/Catagori';

const Catagoris = () => {

    const [catagoris, setCatagoris] = useState([]);
    const [catagori, setCatagori] = useState([]);

    useEffect(() => {
        fetch('/productData.json')
            .then(res => res.json())
            .then(data => setCatagoris(data))

    }, []);


    useEffect(() => {
        fetch('/Catagory.json')
            .then(res => res.json())
            .then(data => setCatagori(data))

    }, []);

    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-4xl text-center mt-20 font-bold'>Explore Cutting-Edge Gadgets</h2>
           <div className=''>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    catagoris.map(catagori => <Catagori key={catagori.product_id} catagori={catagori}></Catagori>)
                }
            </div>
           </div>
        </div>
    );
};

export default Catagoris;