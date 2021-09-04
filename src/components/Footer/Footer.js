import React from 'react';
import './Footer.css';
import footerLogo from '../../img/footerlogo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-md-6">
                        <img width="120px" src={footerLogo} alt="Logo" className="logo" />
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>About Online Food</li>
                            <li>Read our Blog</li>
                            <li>Sign up to Deliver</li>
                            <li>Add your Restaurant</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>Get help</li>
                            <li>Read FAQs</li>
                            <li>View all cities</li>
                            <li>Restaurants near me</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex pb-5">
                    <small>Copyright &copy; 2021 | Red Onion Foods </small>
                    <p className="ms-auto me-5">Privacy Policy</p>
                    <p className="me-5">Terms Of Use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;