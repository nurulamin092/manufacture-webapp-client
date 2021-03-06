import React from 'react';
const Product = ({ product, setPurchase }) => {
    const { name, img, description, price, quantity, minOrder } = product;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Quantity {quantity}</p>
                <p>Minimum Order {minOrder}</p>
                <p>Price ${price}</p>
                <div className="card-actions">
                    <label
                        htmlFor="purchase-modal"
                        onClick={() => setPurchase(product)}
                        className='btn bg-gradient-to-r 
                        from-cyan-500 to-blue-500 hover:from-pink-500 
                        hover:to-yellow-500 text-2xl uppercase'>
                        Buy Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Product;