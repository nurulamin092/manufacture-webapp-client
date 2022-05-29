import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const PurchaseModal = ({ purchase, setPurchase }) => {
    const { _id, name, img, price } = purchase;
    const [user] = useAuthState(auth);


    const handlePurchase = event => {
        event.preventDefault();
        const orders = {
            purchaseId: _id,
            purchase: name,
            name,
            price,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast(`Your Order is successful`)
                }
                else {
                    toast.error(`Your order is failed`)
                }
                setPurchase(null);
            });
    }
    return (
        <div>
            <div>
                <input type="checkbox" id="purchase-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                        <h3 className="font-bold text-lg text-secondary">Purchase :{name}</h3>
                        {/* <h3 className="font-bold text-lg text-secondary">Booking Price : {price}</h3> */}
                        <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center'>
                            <img src={img} alt="" />
                            <input type="text" name='name'
                                disabled value={user?.displayName}
                                className="input input-bordered w-full max-w-xs" />
                            <input
                                type="text" name='email'
                                disabled value={user?.email}
                                className="input input-bordered w-full max-w-xs"
                            />
                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                            <input
                                type="number" name='quantity' placeholder="Order Quantity"
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
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;