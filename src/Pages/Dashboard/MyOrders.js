import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setMyOrders(data);
                });
        }

        /* if (user) {
            fetch(`http://localhost:5000/order?customerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyOrders(data);
                })
        } */
    }
        , [user, navigate])
    return (
        <div>
            <h2>My Appointments: {myOrders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Phone</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.customerEmail}</td>
                                <td>{order.quantity}</td>
                                <td>{order.phone}</td>
                                <td>
                                    {order.price &&
                                        <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className='btn btn-xs btn-success'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        (order.price && order.paid) && <span className='text-success'>Paid</span>
                                    }
                                </td>
                                <td>
                                    {
                                        (order.price && !order.paid) &&
                                        <button className='btn btn-xs bg-red-500' >
                                            Delete
                                        </button>
                                    }

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;