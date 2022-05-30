import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const handleReview = (e) => {
        e.preventDefault();
        const reviews = {
            customerEmail: user.email,
            customerName: user.displayName,
            customerPhoto: user.photoURL,
            comment: e.target.comment.value,
            rating: e.target.rating.value,
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast(`Your Review is successful`)
                }
                else {
                    toast.error(`Your Review is failed`)
                }

            });

    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Add a Review</h2>
                    <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <img src={user?.photoURL} alt="" />
                        <input type="text" name='name'
                            disabled value={user?.displayName}
                            className="input input-bordered w-full max-w-xs" />
                        <input
                            type="text" name='email'
                            disabled value={user?.email}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="number" name='rating'
                            className="input input-bordered w-full max-w-xs"
                        />
                        <textarea
                            className='textarea w-full max-w-md'
                            name='comment'
                            placeholder='Your Review'
                            rows={6}
                        ></textarea>
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

export default AddReview;