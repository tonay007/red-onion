import React from 'react';
import FoodMenu from '../FoodMenu/FoodMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import WhyYouChooseUs from '../WhyYouChooseUs/WhyYouChooseUs';

const Homepage = (props) => {
    return (
        <>
            <Navbar setUserInfo={props.setUserInfo} userInfo={props.userInfo} cart={props.cart.cart}></Navbar>
            <Header></Header>
            <br /><br />
            <FoodMenu cart={props.cart}></FoodMenu>
            <br /><br />
            <WhyYouChooseUs></WhyYouChooseUs>
            <br /><br />
            <Footer></Footer>
        </>
    );
};

export default Homepage;