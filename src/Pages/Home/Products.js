import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';
import PurchaseModal from './PurchaseModal';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [purchase, setPurchase] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className='my-28'>
            <div className='text-center uppercase'>
                <h2 className='text-4xl text-primary  font-bold my-10'>Our Products</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                        setPurchase={setPurchase}
                    >
                    </Product>)
                }
            </div>
            {
                purchase && <PurchaseModal purchase={purchase} setPurchase={setPurchase}></PurchaseModal>
            }

        </div>
    );
};

export default Products;