import grupPng from '../../assets/Group.png'

import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredProductList, getStoredProductWishList, clearCart } from '../../Utility/adToLo';
import { RxCross2 } from "react-icons/rx";
import { FaArrowDownWideShort } from "react-icons/fa6";


const Dashbord = () => {
    const [addTocart, setAddToCart] = useState([]);
    const allProducts = useLoaderData();
    const [short, setShort] = useState('');
    const [addWish, setAddWish] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('cart');
    const navigate = useNavigate();

    useEffect(() => {
        const storedProduct = getStoredProductList();
        const productAdd = allProducts.filter(product => storedProduct.includes(product.product_id));
        setAddToCart(productAdd);
    }, [allProducts]);

    useEffect(() => {
        const storedProduct = getStoredProductWishList();
        const productAdd = allProducts.filter(product => storedProduct.includes(product.product_id));
        setAddWish(productAdd);
    }, [allProducts]);

    const handleShortPrice = (shortType) => {
        setShort(shortType);
        if (shortType === 'price') {
            const shorted = [...addTocart].sort((a, b) => b.price - a.price);
            setAddToCart(shorted);
        }
    };


    const handleRemoveProduct = (productId) => {
        const updatedCart = addTocart.filter(product => product.product_id !== productId);
        setAddToCart(updatedCart);
    
        const storedProducts = getStoredProductList().filter(id => id !== productId);
        localStorage.setItem('productList', JSON.stringify(storedProducts));
    };

    const handlePurchase = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        clearCart();
        setAddToCart([]);
        navigate('/');
    };

    return (
        <div>
            <div className='flex justify-center bg-[#9538E2] p-10 text-center w-full'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>Dashbord</h1>
                    <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className='flex gap-4 justify-center'>
                        <button onClick={() => setActiveTab('cart')} className={`btn btn-outline rounded-full ${activeTab === 'cart' ? 'border-green-600 bg-black text-red-600' : ''}`}>
                            Cart ({addTocart.length})
                        </button>
                        <button onClick={() => setActiveTab('wishlist')} className={`btn btn-outline rounded-full ${activeTab === 'wishlist' ? 'border-green-600 bg-black text-red-600' : ''}`}>
                            Wishlist ({addWish.length})
                        </button>
                    </div>
                </div>
            </div>
            {activeTab === 'cart' && (
                <div className='cart-list max-w-6xl mx-auto mt-10'>
                    <div className='flex justify-between'>
                        <h2 className='text-2xl font-bold'>Cart</h2>
                        <div className='flex gap-4 items-center'>
                            <h2>Total Cost : ${addTocart.reduce((acc, product) => acc + product.price, 0)}</h2>
                            <button onClick={() => handleShortPrice('price')} className='btn btn-outline rounded-full'>Sort By Price <FaArrowDownWideShort /></button>
                            <button onClick={handlePurchase} className='btn btn-outline rounded-full'>Purchase</button>
                        </div>
                    </div>
                    <div className='mt-10'>
                        {addTocart.map(product => (
                            <div key={product.product_id} className='flex justify-between bg-white text-black mb-6 p-4 rounded-2xl'>
                                <div className='flex gap-8 items-center'>
                                    <img className='w-[150px] h-[124px] rounded-2xl' src={product.product_image} alt="" />
                                    <div className='space-y-2'>
                                        <h2 className='text-2xl font-semibold'>{product.product_title}</h2>
                                        <p>{product.description}</p>
                                        <p className='text-xl font-semibold'>Price: ${product.price}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleRemoveProduct(product.product_id)} className='btn btn-outline text-red-500'><RxCross2 /></button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {activeTab === 'wishlist' && (
                <div className='wish-list max-w-6xl mx-auto mt-10'>
                    {addWish.map(wish => (
                        <div key={wish.product_id} className='flex justify-between bg-white text-black mb-6 p-4 rounded-2xl'>
                            <div className='flex gap-8 items-center'>
                                <img className='w-[200px] h-[124px] rounded-2xl' src={wish.product_image} alt="" />
                                <div className='space-y-2'>
                                    <h2 className='text-2xl font-semibold'>{wish.product_title}</h2>
                                    <p className='text-xl font-semibold'>Price: ${wish.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {showModal && (
                <div className='fixed inset-0 flex justify-center items-center'>
                    <div className='bg-white text-black p-6 rounded-lg text-center'>
                        <div className='flex justify-center mb-3'>
                            <img src={grupPng} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold'>Payment Successfully</h2>
                        <p>Thanks for Purchasing</p>
                        <p className='text-lg'>Total Price: ${addTocart.reduce((acc, product) => acc + product.price, 0)}</p>
                        <button onClick={handleCloseModal} className='btn btn-outline mt-4'>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashbord;
