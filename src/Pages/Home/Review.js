import React from 'react';

const Review = ({ review }) => {

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.customerPhoto} alt='' />
                        </div>
                    </div>
                    <div className=''>
                        <h4 className='text-xl'> Customer Name: {review.customerName}</h4>
                        <h4 className='text-xl'> Customer Email {review.customerEmail}</h4>
                        <p> Review: {review.comment}</p>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;