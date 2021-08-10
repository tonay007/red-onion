import React from 'react';
import FoodMenu from '../FoodMenu/FoodMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import WhyYouChooseUs from '../WhyYouChooseUs/WhyYouChooseUs';

const Homepage = () => {
    return (
        <>
            <Header></Header>
            <br /><br />
            <FoodMenu></FoodMenu>
            <br /><br />
            <WhyYouChooseUs></WhyYouChooseUs>
            <br /><br />
            <Footer></Footer>
        </>
    );
};

export default Homepage;