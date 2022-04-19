import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../../image/banner/1585847681Untitled_design_(1) (1).jpg'
import banner2 from '../../../../image/banner/pexels-pankaj-biswas-57542.png'
import banner3 from '../../../../image/banner/pexels-photomix-company-212372.png'
import banner4 from '../../../../image/banner/pexels-photomix-company-212372.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div >
            <Carousel className='banner' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <div className='overlay'></div>
                    <Carousel.Caption className='mb-5'>
                        <h1>HIRE A PHOTOGRAPHER / CINEMATOGRAPHER</h1>
                        <h6 className='text-carosal'>For Any Event, Anywhere in Bangladesh</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <div className='overlay'></div>


                    <Carousel.Caption className='mb-5 text'>
                        <h1 >HIRE A PHOTOGRAPHER / CINEMATOGRAPHER</h1>
                        <h5>For Any Event, Anywhere in Bangladesh
                        </h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <div className='overlay'></div>

                    <Carousel.Caption className='mb-5'>
                        <h1>HIRE A PHOTOGRAPHER / CINEMATOGRAPHER</h1>
                        <h6>For Any Event, Anywhere in Bangladesh</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;