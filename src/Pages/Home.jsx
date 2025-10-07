import React from 'react';
import { useLoaderData } from 'react-router';
import Product from './ProductCard';
import ProductCard from './ProductCard';

const Home = () => {
    const products = useLoaderData()
    // const{}
    console.log(products)
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    products.map((data) => <ProductCard key={data.id} data={data}></ProductCard>)
                }
           </div> 
        </div>
    );
};

export default Home;