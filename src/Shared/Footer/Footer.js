import React from 'react';
import link1 from '../../image/Link/goolge play.png'
import link2 from '../../image/Link/1200px-Download_on_the_App_Store_Badge.svg.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="row py-2">
                <div className="d-flex  justify-content-center  align-items-center col-lg-8">
                    <div>
                        <p className='text-center line common '><small>copyright@ 2022 BD-PHOTOGRAPHER, ALL RIGHT RESERVEd</small></p>
                    </div>

                </div>

                <div class=" d-flex justify-content-center  align-items-center col-lg-4">
                    <div>
                        <h4 className='common'>Get the app</h4>
                        <img className='logo ' src={link1} alt="" />
                        <img className='logo pic' src={link2} alt="" />

                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;