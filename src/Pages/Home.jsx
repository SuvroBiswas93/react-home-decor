import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Product from './ProductCard';
import ProductCard from './ProductCard';
import useProduct from '../Hooks/useProduct';

const Home = () => {
    const {products,loading,error} = useProduct()
    const homePageProducts = products.slice(0,6)
    // const{}
    // console.log(products)
    return (
        <div>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Fetured Products</h1>
                <Link to='/products' className="btn btn-outline">See All Products</Link>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    homePageProducts.map((data) => <ProductCard key={data.id} data={data}></ProductCard>)
                }
           </div> 
        </div>
    );
};

export default Home;