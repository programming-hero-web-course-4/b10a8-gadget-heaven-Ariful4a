import React from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>404 | Gadget Heaven</title>
            </Helmet>
            <h2>Page Not Found</h2>
            <h2 className='text-9xl'>404</h2>
        </div>
    );
};

export default ErrorPage;   