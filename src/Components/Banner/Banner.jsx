
import React from 'react';
import BannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
           <div className="text-center py-20 bg-[#9538E2] h-[550px] text-white">
           <h1 className="text-6xl font-bold">
                Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
            </h1>
            <p className="mt-4">
                Explore the latest gadgets that will take your experience to the next level. 
                From smart devices to <br /> the coolest accessories, we have it all!
            </p>
            <button className="btn bg-white text-[#9538E2] rounded-full mt-6 hover:bg-gray-200">
                Shop Now 
            </button>
           </div>
            <div className=''>
                <img className="w-[1020px] h-[560px] border p-4 rounded-2xl mx-auto -mt-40" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
