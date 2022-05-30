import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Purchase = ({ purchase, setPurchase }) => {
    // const { name, img, price, quantity } = purchase;
    const { productId } = useParams();
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const localhostUrl = `http://localhost:5000/product/${productId}`;
        //const url = `https://serene-brook-28678.herokuapp.com/products/${productId}`;
        fetch(localhostUrl)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product, productId]);


    /*   const handlePurchase = (e) => {
          e.preventDefault();
          // const name = e.target.name.value;
          const order = {
  
              purchase: name,
              price,
              quantity,
              customerName: user.displayName,
              customerEmail: user.email,
              phone: e.target.phone.value,
  
          }
          fetch('http://localhost:5000/orders', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(order)
          })
              .then(res => res.json())
              .then(data => {
                  if (data) {
                      toast.success(`Your Order Is successful, ${name} at ${price}`)
                  }
                  else {
                      toast.error(`your order is failed'`)
                  }
                  setPurchase(null);
              });
          // console.log(_id, name, price, quantity);
  
      } */

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div>
                        {/*   <h1 className="text-5xl font-bold">{product.name}</h1>
                        <p className="py-6"></p>
                        <button className="btn btn-primary">Get Started</button> */}

                        {/* <div className='product-container'>
                            <img height={300} src={product.photoUrl} alt="" />
                            <h1>{product.name}</h1>
                            <h2>Price $<span>{product.price}</span></h2>
                            <p>Description {product.description}</p>
                            <p>Supplier Name: {product.supplierName}</p>
                            <p>Quantity {product.quantity}</p>
                        </div> */}
                        {/*  <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center'>
                            <img src={img} alt="" />
                            <input type="text" name='name'
                                disabled value={user?.displayName}
                                className="input input-bordered w-full max-w-xs" />
                            <input
                                type="text" name='email'
                                disabled value={user?.email}
                                className="input input-bordered w-full max-w-xs"
                            />
                            <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered w-full max-w-xs" />
                            <input
                                type="number" name='quantity' value={quantity} placeholder="Order quantity"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <input
                                type="number" name='price' value={price} placeholder="Price"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <input
                                type="submit"
                                className=" btn btn-secondary input input-bordered w-full max-w-xs"
                                value="Order"
                            />
                        </form> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;