import React from 'react';

const ProductCard = ({data}) => {
    const{image,name,category,price,material,description}=data
    return (
        <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
  <figure className='h-40 overflow-hidden'>
    <img
      src={image}
      alt="Shoes" className='object-cover w-full'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='font-bold'>{category}</p>
    <p>{description}</p>
    <p className='font-bold'>Price : ${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;