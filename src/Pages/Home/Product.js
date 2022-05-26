import React from 'react';
const Product = ({ product }) => {
    const { name, img, description, price } = product;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <div class="card-actions">
                    <button class="btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-2xl">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;