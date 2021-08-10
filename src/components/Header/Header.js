import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="font-default">Best food waiting for your stomach</h1>
            <form className="d-flex mt-3 w-50 justify-content-center">
                <input className="search-bar" type="text" placeholder="Search Food Items" />
                <input className="search-btn" type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Header;