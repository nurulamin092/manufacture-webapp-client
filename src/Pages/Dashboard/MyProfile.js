import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handUser = (e) => {
        e.preventDefault();
        const infomation = {
            comment: e.target.comment.value,

            address: e.target.address.value
        }

    }
    return (
        <div className='flex gap-4'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>{user?.email}</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Update your Information</h2>
                    <form onSubmit={handUser} className='grid grid-cols-1 gap-3 justify-items-center'>

                        <input
                            type="text" name='address'
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text" name='phone'
                            className="input input-bordered w-full max-w-xs"
                        />

                        <input
                            type="submit"
                            className=" btn btn-secondary input input-bordered w-full max-w-xs"
                            value="Add Review"
                        />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;