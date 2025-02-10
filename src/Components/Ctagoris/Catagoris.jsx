import React, { useEffect, useState } from 'react';
import Catagori from '../Ctagori/Catagori';
import SingleCatagoris from '../SingleCatagoris/SingleCatagoris';

const Catagoris = () => {
    const [catagoris, setCatagoris] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch('/productData.json')
            .then(res => res.json())
            .then(data => setCatagoris(data))
    }, []);

    // ফিল্টার করা প্রোডাক্ট ডাটা
    const filteredProducts = selectedCategory === "All"
        ? catagoris
        : catagoris.filter(product => product.category === selectedCategory);

    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-4xl text-center mt-20 font-bold'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex gap-10'>
                {/* categoru buttons  */}
                <div>
                    <SingleCatagoris setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {
                        filteredProducts.map(catagori => <Catagori key={catagori.product_id} catagori={catagori} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Catagoris;
