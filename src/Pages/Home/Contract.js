import React from 'react';

const Contract = () => {
    return (
        <section className='bg-gray-500 px-10 py-14'>
            <div className='text-center pb-14  text-white'>
                <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500'>Contact Us</p>
                <h2 className='text-4xl'>Stay connected with us</h2>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <div className="card-actions">
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-2xl">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default Contract;