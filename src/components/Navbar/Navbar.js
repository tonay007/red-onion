import React from 'react';
import './Navbar.css';
import logo from '../../img/navlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const handleSignOut = () => {
        const newUserInfo = {
            isLoggedIn: false,
            name: '',
            email: '',
            password: ''
        }
        props.setUserInfo(newUserInfo)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width='150' alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>  {props.cart.length}
                            </li>
                            {
                                !props.userInfo.email && <>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login"><button className="sign-up-btn">Sign Up</button></Link>
                                    </li>
                                </>
                            }
                            {
                                props.userInfo.email && <>
                                    <li className="nav-item">
                                        <h6>{props.userInfo.email}</h6>
                                    </li>
                                    <li className="nav-item">
                                        <button className="sign-up-btn" onClick={handleSignOut}>Sign Out</button>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;