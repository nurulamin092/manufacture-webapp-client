import React from 'react';

const ProductRow = ({ product, index, refetch, }) => {
    const { name, quantity, img, price } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>${price}</td>

        </tr>
    );
};

export default ProductRow;