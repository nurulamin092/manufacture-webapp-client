import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    /* const { data: products, isLoading, refetch } = useQuery('products', () => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    } */
    const [products, setProducts] = useState([]);
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
                    products.slice(0, 3).map(product => <Product
                        key={product._id} product={product}>
                    </Product>)
                }
            </div>

        </div>
    );
};

export default Products;