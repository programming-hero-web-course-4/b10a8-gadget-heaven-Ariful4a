import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredProductList } from '../../Utility/adToLo';
import { RxCross2 } from "react-icons/rx";

const Dashbord = () => {
    const [addTocart, setAddToCart] = useState([]);
    const allProducts = useLoaderData();
    

    useEffect(() => {
        const storedProduct = getStoredProductList();
        console.log(storedProduct, allProducts);
        const productAdd = allProducts.filter(product => storedProduct.includes(product.product_id));
        setAddToCart(productAdd);
    }, [])


    return (
        <div>
            <div className='flex justify-center bg-[#9538E2] p-10 text-center w-full'>
                <div className='space-y-4'>
                    <h1 className='text-4xl'>Dashbord</h1>
                    <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className='flex gap-4 justify-center'>
                        <button className='btn btn-outline rounded-full'>Cart</button>
                        <button className='btn btn-outline rounded-full'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto mt-10'>
                <div className='flex justify-between'>
                    <h2 className='text-2xl font-bold'>Cart</h2>
                    <div className='flex gap-4 items-center'>
                        <h2>Total Cost : </h2>
                        <button className='btn btn-outline rounded-full'>Short By Price</button>
                        <button className='btn btn-outline rounded-full'>Purchase</button>
                    </div>
                </div>
                <div className='mt-10'>
                    <div>
                        {
                            addTocart.map(product => <div key={product.product_id} product={product}>
                                <div className='flex justify-between bg-white text-black mb-6 p-4 rounded-2xl'>
                                    <div className='flex gap-8 items-center'>
                                        <div>
                                            <img className='w-[200px] h-[124px] rounded-2xl' src={product.product_image} alt="" />
                                        </div>
                                        <div className='space-y-2'>
                                            <h2 className='text-2xl font-semibold'>{product.product_title}</h2>
                                            <p className='text-gray-600'>{product.description}</p>
                                            <p className='text-xl font-semibold'>Price : {product.price}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='btn btn-outline text-red-500'><RxCross2></RxCross2></button>
                                    </div>
                                </div>
                            </div>) 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;