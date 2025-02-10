

import React, { useEffect, useState } from 'react';

const SingleCatagoris = ({ setSelectedCategory, selectedCategory }) => {
    const [sinCatagori, setSinCatagori] = useState([]);

    useEffect(() => {
        fetch('/Catagory.json')
            .then(res => res.json())
            .then(data => setSinCatagori(data))
    }, []);

    return (
        <div className="flex flex-col gap-4 mt-10 border p-4 rounded-2xl">
            {/* All Products Button */}
            <button 
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 border rounded-full ${selectedCategory === "All" ? "bg-[#9538E2] text-white" : "bg-transparent border-[#9538E2] text-white"}`}
            >
                All Products
            </button>

            {/* Dynamic Category Buttons */}
            {sinCatagori.map(category => (
                <button 
                    key={category.category} 
                    onClick={() => setSelectedCategory(category.category)}
                    className={`px-4 py-2 border rounded-full ${selectedCategory === category.category ? "bg-[#9538E2] text-yellow-500" : "bg-transparent border-[#9538E2] text-white"}`}
                >
                    {category.category}
                </button>
            ))}
        </div>
    );
};

export default SingleCatagoris;
