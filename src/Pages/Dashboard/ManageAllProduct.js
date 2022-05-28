import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';
const ManageAllProduct = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () =>
        fetch('http://localhost:5000/allProduct', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage All  Products: {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._key}
                                product={product}
                                index={index}
                                refetch={refetch}

                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageAllProduct;