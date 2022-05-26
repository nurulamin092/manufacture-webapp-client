import React from 'react';
import Review from './Review';
import quote from '../../assets/icon/quote.svg'
import people1 from '../../assets/images/product/people1.png';
import people2 from '../../assets/images/product/people2.png';
import people3 from '../../assets/images/product/people3.png';
const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herrry',
            review: '',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herrry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herrry',
            review: '',
            location: 'california',
            img: people3
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className=' text-xl text-primary font-bold'>Testimonial</h3>
                    <h2 className='text-3xl font-bold'>What Our Patients Says</h2>
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