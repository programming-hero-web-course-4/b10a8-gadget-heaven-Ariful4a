import React from 'react';

const Catagori = ({ catagori }) => {
    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = catagori;
    return (
        <div>
            {/* main div */}
            <div className=''>
                <div>
                    <div className="card bg-slate-100 text-black shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product_title}</h2>
                            <p className='text-gray-800'>Price : {price}</p>
                            <div className="">
                                {/* <button className="btn border border-[#9538E2] bg-transparent text-black rounded-full hover:bg-[#9538E2]">Buy Now</button> */}
                                <button className="btn border-[4px] border-[#9538E2] bg-transparent text-black rounded-full hover:bg-[#9538E2] hover:border-white hover:text-white">
                                    Details
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagori;