import React from 'react';

const About = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/sw3t7Rc/Background-1.png/w=460&h=800" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">About Our Company!</h1>
                    <p class="py-6">
                        MNFT was established in 2005 and provides bicycle OEM services.
                        We have 13 years of bicycle manufacturing and exporting experience.
                        The factory covers an area of more than 80,000 square meters,
                        has more than 500 employees. Has a number of automatic bicycle welding
                        , spraying, decals, assembly, packaging production line.
                        .</p>
                    <button class="btn btn-primary">About Us</button>
                </div>
            </div>
        </div>
    );
};

export default About;