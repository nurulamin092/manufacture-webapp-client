import React, { useEffect, useState } from 'react';
import Review from './Review';
import quote from '../../assets/icon/quote.svg'
const Reviews = () => {

    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className=' text-xl text-primary font-bold'>Review</h3>
                    <h2 className='text-3xl font-bold'> Our Customer Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;