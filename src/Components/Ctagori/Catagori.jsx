    import React from 'react';
    import { Link } from 'react-router-dom';

    const Catagori = ({ catagori }) => {
        const {product_id, product_title, product_image, price } = catagori;
        return (
            <div>
                {/* main div */}
                <div className=''>
                    <div>
                        <div className="card bg-slate-100 text-black shadow-sm">
                            <figure>
                                <img className="p-4 rounded-2xl h-[200px]"
                                    src={product_image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product_title}</h2>
                                <p className='text-gray-800'>Price : {price}</p>
                                <div className="">
                                <Link to={`/detail/${product_id}`}>
                                <button className="btn border-[4px] border-[#9538E2] bg-transparent text-black rounded-full hover:bg-[#9538E2] hover:border-white hover:text-white">
                                        Details
                                    </button>
                                </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Catagori;