import React, { useState } from 'react';
import useProduct from '../Hooks/useProduct';
import ProductCard from './ProductCard';

const Products = () => {
    const [search,setSearch] =useState('')
    const {products}=useProduct()

    const term = search.trim().toLocaleLowerCase()
    const searchProducts = term ? 
    products.filter(product => 
        product.name.toLocaleLowerCase().includes(term)
    )
    : products

    return (
        <div>
            <h3> Total Product: {products.length}</h3>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">All Products : <span className='text-sm text-gray-500'>({searchProducts.length}) Products Found</span></h1>
                <label className="input">
                    <input
                    value={search}
                    onChange={e=>setSearch(e.target.value)} 
                    type="search" 
                    placeholder="Search Products" 
                    />
                    
                </label>
            </div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {
                        searchProducts.map((data) => <ProductCard key={data.id} data={data}></ProductCard>)
                    }
            </div>
        </div>
    );
};

export default Products;