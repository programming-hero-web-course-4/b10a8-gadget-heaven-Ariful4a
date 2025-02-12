import React from 'react';

const Footer = () => {
    return (
        <div className="p-10 bg-neutral mt-10">
             <div className='flex flex-col justify-center'>
                    <h2 className='text-4xl font-bold flex justify-center'>Gadget Heaven</h2>
                    <p className='text-center my-4'>Leading the way in cutting-edge technology and innovation.</p>
                    <hr />
                </div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 max-w-5xl mx-auto">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shoping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;