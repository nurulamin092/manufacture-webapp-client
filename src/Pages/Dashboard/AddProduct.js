import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '690263f590e66a3408ed89e8cb48a9e3';
    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?&key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        quantity: data.quantity,
                        minOrder: data.minOrder,
                        img: img
                    }
                    fetch('https://secure-shore-47038.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })
                }

            })


    }
    return (
        <div>
            <h2 className='text-2xl'>Add a new Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    <label className="label">
                        {
                            errors.name?.type === 'required' &&
                            <span className="label-text-alt text-red-500">
                                {errors.name.message}
                            </span>
                        }
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea
                        type="text"
                        rows={4}
                        placeholder="Product Description"
                        className="textarea input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is required'
                            }
                        })}
                    />
                    <label className="label">
                        {
                            errors.name?.type === 'required' &&
                            <span className="label-text-alt text-red-500">
                                {errors.description.message}
                            </span>
                        }
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is required'
                            }
                        })}
                    />
                    <label className="label">
                        {
                            errors.price?.type === 'required' &&
                            <span className="label-text-alt text-red-500">
                                {errors.price.message}
                            </span>
                        }
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Available quantity is required'
                            }
                        })}
                    />
                    <label className="label">
                        {
                            errors.quantity?.type === 'required' &&
                            <span className="label-text-alt text-red-500">
                                {errors.quantity.message}
                            </span>
                        }
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minOrder", {
                            required: {
                                value: true,
                                message: 'Minimum order quantity is required'
                            }
                        })}
                    />
                    <label className="label">
                        {
                            errors.minOrder?.type === 'required' &&
                            <span className="label-text-alt text-red-500">
                                {errors.minOrder.message}
                            </span>
                        }
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })}
                    />
                    <label className="label">
                        {
                            errors.image?.type === 'required' &&
                            <span className="label-text-alt text-red-500">
                                {errors.image.message}
                            </span>
                        }
                    </label>
                </div>
                <input className='btn w-full max-w-xs text-white' type="submit" value="Add New Product" />
            </form>
        </div>
    );
};

export default AddProduct;