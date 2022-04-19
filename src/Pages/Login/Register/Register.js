import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate("/home");
    }


    const handleRegister = event => {
        event.preventDefault();
        const name = (event.target.name.value);
        const email = (event.target.email.value);
        const password = (event.target.password.value);

        createUserWithEmailAndPassword(email, password);
    }



    return (

        <div className='register'>

            <h1 style={{ textAlign: 'center', color: 'orange' }}>Register here</h1>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="1" placeholder='Your Name' required />

                <input type="email" name="email" id="2" placeholder='Your Email' required />

                <input type="password" name="password" id="3" placeholder='Your Password' required />
                {/* 
                <div className='check'>
                    <input className='mt-4' type="checkbox" name="terms" id="terms" />

                    <label htmlFor="terms">Accepts terms and conditions</label>
                </div> */}



                <input

                    className='btn btn-primary w-50 mx-auto d-block mb-5 mt-4 ' type="submit" value="Register" />


                <p> Already have an Account? <Link to="/login" className='text-danger pe-auto' onClick={navigateLogin} >Please Login</Link></p>
                <SocialLogin></SocialLogin>

            </form>

        </div >

    );
};

export default Register;