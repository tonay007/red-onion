import React from 'react';
import FoodMenu from '../FoodMenu/FoodMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import WhyYouChooseUs from '../WhyYouChooseUs/WhyYouChooseUs';

const Homepage = (props) => {
    return (
        <>
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