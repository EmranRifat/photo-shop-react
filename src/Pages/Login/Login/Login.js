import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });

    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }




    return (
        <div className='container w-50 mx-auto'>
            <h2 className=' mt-5 text-primary text-center'> Please login First</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mt-4 " controlId="formBasicEmail">
                    <Form.Control ref={emailRef} className="p-3" type="email" placeholder="Enter Your email:" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} className="p-3" type="password" placeholder="Enter your Password:" required />
                </Form.Group>

                <p>Forget password? <Link to="/register" className='text-danger pe-auto' >Reset password!</Link></p>

                <Button className='w-50 mx-auto d-block mb-5' variant="primary" type="submit">
                    Submit
                </Button>


                <p>New to Photo Studio? <Link to="/register" onClick={navigateRegister} className='text-primary pe-auto' >Please Register here.!</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;