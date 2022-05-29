import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <h2 className='text-3xl font-bold text-primary mb-5 text-center '>Welcome To Your Dashboard</h2>
                <Outlet>
                </Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review"> Add Review</Link></li>


                    {
                        admin && <>
                            <li>
                                <Link to="/dashboard/users">All Users</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addProduct">Add Product</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/allProduct">Manage All Product</Link>
                            </li>

                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;