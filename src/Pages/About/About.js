import React from 'react';
import img from '../../../src/image/self/self.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>About me</h1>
            <img className='d-block mx-auto my-2 self' src={img} alt="" />
            <h3 className='text-center mx-auto my-2 '>Emran Hasan Rifat </h3>
            <h5 className='text-center mx-auto my-2 ' >Computer Science and Engineering(DIU)</h5>
            <p>From my varsity first semester i decided in future i want to be a Web developer. As i am private University student though academic study and my  tutions gave the much time.Then i have not any progress.In the Last semester i Enroll Programming Hero now i gave the full time it my passion.Gradually i see my progress. It was not a easy journey. I always make my proper time shedule and try to maintained that.Their proper guideline hlps me very much.Now my goals one and only learn more  and work as a developer for a company.</p>
        </div>
    );
};

export default About;