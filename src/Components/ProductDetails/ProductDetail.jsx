
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
    const { product_id } = useParams();
    const dataLoder = useLoaderData();

    const details = dataLoder.find(book => book.product_id === product_id);

    if (!details) {
        return <p className="text-center text-red-500">Product not found!</p>;
    }

    const { product_title, price, availability, description, Specification, rating, product_image } = details;

    const handleMarkAsRead = (id) => {
        console.log("Added to Cart:", id);
    };

    return (
        <div className="hero bg-base-200 min-h-screen p-6 mb-6 rounded-2xl">
            <div className="hero-content grid grid-cols-2 gap-10">
                {/* Product Image */}
                <div className="bg-slate-200 flex justify-center py-10 rounded-2xl">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-lg w-[425px] p-4 h-[400px] shadow-2xl transform -rotate-3 -translate-x-4 -translate-y-2"
                    />
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-5xl font-bold">{product_title}</h1>
                    <p className="mt-4">Price: {price}</p>
                    <p className={`mt-4 p-2 w-[150px] text-center font-bold rounded-2xl border ${availability ? "text-green-500 border-green-500" : "text-red-500 border-red-500"}`}>
                        {availability ? "In stock" : "Out of Stock"}
                    </p>
                    <p className="py-6">{description}</p>

                    {/* Product Specifications */}
                    <div>
                        <h2 className="text-2xl font-bold">Specifications:</h2>
                        <ul className="space-y-2 mt-4 list-disc ml-5">
                            {Specification.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <hr className="mt-4 mb-4" />

                    {/* Rating System */}
                    <div className="grid grid-cols-2">
                        <div className="font-bold space-y-2">
                            <p className="text-xl font-black">Rating:</p>
                        </div>
                        <div className="space-y-2 flex gap-4 items-center">
                            <RatingComponent rating={rating} />
                            <p>{rating}</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="card-actions mt-4">
                        <button onClick={() => handleMarkAsRead(product_id)} className="btn btn-outline btn-info">
                            Add to Cart
                        </button>
                        <button className="btn btn-info">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable Rating Component
const RatingComponent = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => {
                const fullStar = index + 1;
                const halfStar = index + 0.5;
                return (
                    <div key={index} className="relative w-6 h-6">
                        {rating >= fullStar ? (
                            <div className="mask mask-star-2 bg-green-500 w-full h-full"></div>
                        ) : rating >= halfStar ? (
                            <div className="mask mask-star-2 bg-green-500 w-1/2 h-full absolute left-0"></div>
                        ) : (
                            <div className="mask mask-star-2 bg-gray-300 w-full h-full"></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProductDetail;
