import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    const { name, img, id, price, description } = props.Service;
    const navigate = useNavigate();

    const naviagteServiceDetail = id => {
        navigate(`/service/${id}`);
    }


    return (
        <div className=' g-4 col-lg-4 col-sm-12 col-md-6'>
            <div class="card " style={{ width: "22rem" }}>
                <img className='w-100' style={{ height: "14rem" }} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text"> We have some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h4 className='mb-4' >Price: {price}</h4>
                    <Link className='btn1 px-4 ' to="/CheckOut"> Book Now</Link>

                    {/* <Link onClick={() => naviagteServiceDetail(id)} href="" class="btn btn-primary book-btn">Book Now</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Service;