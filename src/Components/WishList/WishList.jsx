import React, { useEffect, useState } from 'react';
import { getStoredProductWishList } from '../../Utility/adToLo';
import { useLoaderData } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const WishList = () => {
    const [addWish, setAddWish] = useState([]);
    const allProducts = useLoaderData();
    console.log(allProducts);

    useEffect(() => {
        const storedProduct = getStoredProductWishList();
        console.log(storedProduct);
        const productAdd = allProducts.filter(product => storedProduct.includes(product.product_id));
        setAddWish(productAdd);
    }, [])

    return (
        <div>
            <div className='mt-10'>
                <div className='max-w-6xl mx-auto'>
                    {
                        addWish.map(wish => <div key={wish.product_id} wish={wish}>
                            <div className='flex justify-between bg-white text-black mb-6 p-4 rounded-2xl'>
                                <div className='flex gap-8 items-center'>
                                    <div>
                                        <img className='w-[200px] h-[124px] rounded-2xl' src={wish.product_image} alt="" />
                                    </div>
                                    <div className='space-y-2'>
                                        <h2 className='text-2xl font-semibold'>{wish.product_title}</h2>
                                        <p className='text-gray-600'>{wish.description}</p>
                                        <p className='text-xl font-semibold'>Price : {wish.price}</p>
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
    );
};

export default WishList;