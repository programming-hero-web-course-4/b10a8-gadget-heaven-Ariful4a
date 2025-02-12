import React, { useEffect, useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

const CustomChart = () => {
    const [barchrt, setBarchrt] = useState([]);

    useEffect(() => {
        fetch('/productData.json')
            .then(res => res.json())
            .then(data => {
                const productChartData = data.map(product => ({
                    name: product.product_title,  
                    price: product.price
                }));
                setBarchrt(productChartData);
            })
            .catch(error => console.error("Data Fetch Error:", error));
    }, []);

    return (
        <div className='max-w-6xl mx-auto' style={{ width: '100%', overflowX: 'auto' }}>
            {barchrt.length > 0 ? (
                <div style={{ width: '1500px' }}>
                    <BarChart width={1500} height={400} data={barchrt}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            dataKey="name" 
                            interval={0}  
                            angle={-30}
                            textAnchor="end" 
                            height={100} 
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="price" fill="#8884d8" />
                    </BarChart>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CustomChart;
