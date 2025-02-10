// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import { Outlet } from 'react-router-dom';
// import Footer from '../Footer/Footer';

// const Root = () => {
//     return (
//         <div>
//             <div className='bg-[#9538E2]'>
//             <Navbar></Navbar>
//             </div>
//             <Outlet></Outlet>
//             <Footer></Footer>

//         </div>
//     );
// };

// export default Root;



import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    const location = useLocation(); 
    const isHomePage = location.pathname === '/';
    const navbarBackground = isHomePage ? 'bg-[#9538E2] text-white' : 'bg-white text-black'; // Background পরিবর্তন 

    return (
        <div>
            {/* Navbar এর dynamic background */}
            <div className={`${navbarBackground} transition-all duration-300`}>
                <Navbar />
            </div>

            {/* Outlet - Content */}
            <Outlet />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Root;
