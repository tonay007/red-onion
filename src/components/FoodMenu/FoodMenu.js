import React, { useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './FoodMenu.css';

const FoodMenu = () => {
    const [foodType, setFoodType] = useState("Lunch");
    const handleChangeFoodCategory = (e) => {
        const type = e.target.innerText;
        const allOptions = document.getElementsByClassName("food-option")
        for(let i=0; i < allOptions.length; i++){
            if(allOptions[i].classList.contains("active-food-option")){
                allOptions[i].classList.remove("active-food-option")
            }
        }
        e.target.classList.add("active-food-option");
        setFoodType(type);
    }
    return (
        <div className="foodmenu">
            <div className="mb-4 food-options d-flex justify-content-center">
                <h6 onClick={handleChangeFoodCategory} className="food-option">Breakfast</h6>
                <h6 onClick={handleChangeFoodCategory} className="active-food-option food-option">Lunch</h6>
                <h6 onClick={handleChangeFoodCategory} className="food-option">Dinner</h6>
            </div>
            {foodType === "Breakfast" && <Breakfast></Breakfast>}
            {foodType === "Lunch" && <Lunch></Lunch>}
            {foodType === "Dinner" && <Dinner></Dinner>}
            <button className="mt-4 checkout-btn" disabled>Checkout your food</button>
        </div>
    );
};

export default FoodMenu;