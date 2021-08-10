import React from 'react';
import Food from '../Food/Food';
import './Lunch.css';
import lunch1 from '../../img/lunch/lunch-1.png';
import lunch2 from '../../img/lunch/lunch-2.png';
import lunch3 from '../../img/lunch/lunch-3.png';
import lunch4 from '../../img/lunch/lunch-4.png';
import lunch5 from '../../img/lunch/lunch-5.png';
import lunch6 from '../../img/lunch/lunch-6.png';

const Lunch = () => {
    return (
        <div className="lunch">
            <div className="row">
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Healthy Meal Plan" des="How we dream about our future" price="23.99" image={lunch1}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Fried Chicken Bento" des="How we dream about our future" price="9.99" image={lunch2}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Tarragon Rubbed Salmon" des="How we dream about our future" price="6.99" image={lunch3}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Indian Lunch" des="How we dream about our future" price="8.99" image={lunch4}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Beef Steak" des="How we dream about our future" price="15.99" image={lunch5}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Honey-Soy-Glazed Salmon with Peppers" des="How we dream about our future" price="7.99" image={lunch6}></Food>
                </div>
            </div>
        </div>
    );
};

export default Lunch;