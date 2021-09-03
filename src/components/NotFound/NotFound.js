import React from 'react';
import Navbar from '../Navbar/Navbar';
import './NotFound.css';

const NotFound = (props) => {
    return (
        <div className="not-found">
            <Navbar setUserInfo={props.setUserInfo} userInfo={props.userInfo} cart={props.cart.cart}></Navbar>
            <h1 className="error-text">Error 404</h1>
            <p>Your requested url cannot be accessed at this time</p>
            <p><small>If you think that this is a mistake, then feel free to contact at <a href="mailto:support@red-onion.com">support@red-onion.com</a></small></p>
        </div>
    );
};

export default NotFound;