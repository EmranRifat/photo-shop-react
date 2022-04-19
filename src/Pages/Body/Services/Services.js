import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);



    return (
        <div className='container'>
            <h1 className=' text-center mt-5 feature'>OUR FEATURED CATEGORIES</h1>
            <p className='text-center mt-4 fw-500'>Explore our exclusive categories, find photographers <br /> you would love to explore and hire.</p>

            <div id='features' className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        Service={service}
                    > </Service>)
                }
            </div>
        </div>
    );
};

export default Services;