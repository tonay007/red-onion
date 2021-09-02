// @ts-nocheck
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import FoodInfo from '../FoodInfo/FoodInfo';
import Lunch from '../Lunch/Lunch';
import './FoodMenu.css';

const FoodMenu = (props) => {
    const [foodType, setFoodType] = useState("Lunch");
    const [otherFoodId, setOtherFoodId] = useState("L001");
    const handleChangeFoodCategory = (/** @type {{ target: { innerText: any; classList: { add: (arg0: string) => void; }; }; }} */ e) => {
        const type = e.target.innerText;
        const allOptions = document.getElementsByClassName("food-option");
        for (let i = 0; i < allOptions.length; i++) {
            if (allOptions[i].classList.contains("active-food-option")) {
                allOptions[i].classList.remove("active-food-option");
            };
        };
        e.target.classList.add("active-food-option");
        setFoodType(type);
    }
    const showFoodDetail = (/** @type {React.SetStateAction<string>} */ id) => {
        setFoodType("Others");
        setOtherFoodId(id);
    }
    props.cart.cart.length !== 0 && document.querySelector(".checkout-btn").classList.add("active");
    return (
        <div className="foodmenu">
            <div className="mb-4 food-options d-flex justify-content-center">
                <h6 onClick={handleChangeFoodCategory} className="food-option">Breakfast</h6>
                <h6 onClick={handleChangeFoodCategory} className="active-food-option food-option">Lunch</h6>
                <h6 onClick={handleChangeFoodCategory} className="food-option">Dinner</h6>
            </div>
            {foodType === "Breakfast" && <Breakfast showFoodDetail={showFoodDetail}></Breakfast>}
            {foodType === "Lunch" && <Lunch showFoodDetail={showFoodDetail}></Lunch>}
            {foodType === "Dinner" && <Dinner showFoodDetail={showFoodDetail}></Dinner>}
            {foodType === "Others" && <FoodInfo cart={props.cart} id={otherFoodId}></FoodInfo>}
            <Link to="/cart"><button className="mt-4 checkout-btn">Checkout your food</button></Link>
        </div>
    );
};

export default FoodMenu;