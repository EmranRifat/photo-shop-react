import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-center '> Difference between authorization and authentication:</h3>
            <h3> Authentication</h3>
            <p>Authentication is the process of identifying someone's identity by assuring that the person is the same as what he is claiming for. <br />
                It is used by both server and client. The server uses authentication when someone wants to access the information, and the server needs to know who is accessing the information. The client uses it when he wants to know that it is the same server that it claims to be.
            </p>
            <h3> Authentication</h3>
            <p>Single-factor authentication is the simplest way of authentication. It just needs a username and password to allows a user to access a system. <br />As per the name, it is two-level security; hence it needs two-step verification to authenticate a user. It does not require only a username and password but also needs the unique information that only the particular user knows, such as first school name, a favorite destination. Apart from this, it can also verify the user by sending the OTP or a unique link on the user's registered number or email address.

            </p>

            <h3 className='text-center  mt-5'>  Why we are using firebase and other alternatives  of firebase:</h3>
            <p>Firebase Analytics gives you undeniable insight into user behavior. You can use this knowledge to make informed decisions about how to market your app better and to reach out to the audiences that you want to target. The unique features it offers also allows you to analyze the performance of your campaigns across organic and paid channels to understand which methods are most effective in regards to the specific users that you want to reach</p>
            <p>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>

            <h3 className='text-center  mt-5'> Services of firebase provide other than authentication:</h3>
            <p>Firebase is Google’s app development platform. It will help you to build, improve, and grow your application in a smooth and standardized way.

                It offers a robust feature set that focuses on three main pillars:

                Helping you to build apps faster
                Releasing apps with confidence, performance, and stability
                Increasing user engagement after releasing the app
                The platform works well for mobile and web applications, and it is designed to increase the general productivity of creating digital products.

                The core features of Firebase include NoSQL databases, real-time queries, scalable hosting, file storage, REST APIs, authentication, and analytics. </p>





        </div>
    );
};

export default Blogs;