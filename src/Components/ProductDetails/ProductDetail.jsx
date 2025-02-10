import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { product_id } = useParams();
    console.log(product_id);

    const dataLoder = useLoaderData();

    
    const details = dataLoder.find(book => book.product_id === product_id);
    // console.log(details);
    const {product_title, price, availability, description, Specification, rating, product_image} = details;
    return (
        <div className="hero bg-base-200 min-h-screen p-6 mb-6 rounded-2xl">
        <div className="hero-content  grid grid-cols-2 gap-10">
            <div className="bg-slate-200 flex justify-center p-16 rounded-2xl   ">
            <img
                src={product_image}
                class="rounded-lg w-[425px] p-10 h-[564px] shadow-2xl transform -rotate-3 -translate-x-4 -translate-y-2" />
            </div>
            <div>
                <h1 className="text-5xl font-bold">{product_title}</h1>
                <hr className='mb-2' />
                <p>{price}</p>
                <p>{availability ? "In stock" : "Out of Stock"}</p>
                <hr className='mt-2' />
                <p className="py-6"><span className="font-bold">Review :</span> {rating}</p>
                <div className="card-actions">
                    <h2 className="text-2xl font-bold">Tags</h2>
                    {
                        Specification.map((tag, index) => <button key={index} className="btn btn-xs mr-2 text-green-500 bg-gray-100 p-4">{tag}</button>)
                    }
                </div>
                <hr className='mt-4 mb-4' />
                <div className="grid grid-cols-2">
                    <div  className='font-bold space-y-2 '>
                        <p>Number of Pages : </p>
                        <p>Publisher : </p>
                        <p>Year of Publishing : </p>
                        <p>Rating : </p>
                    </div>
                    <div className='space-y-2'>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div className="card-actions mt-4">
                <button onClick={() => handleMarkAsRead(bookId)} class="btn btn-outline btn-info">Read</button>
                <button class="btn btn-info">Whishlist</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProductDetail;