import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icon/clock.svg'
import marker from '../../assets/icon/marker.svg'
import phone from '../../assets/icon/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" bgClass=" bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Location" bgClass="bg-[#3A4256]" img={marker}></InfoCard>
            <InfoCard cardTitle="Contract US " bgClass=" bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;