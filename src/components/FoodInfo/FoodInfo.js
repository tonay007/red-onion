/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import allFoods from 'src/data/allFoods';
import './FoodInfo.css';

const FoodInfo = (props) => {
    const { id, cart } = props;
    const matchedFood = allFoods.find(food => food.key === id);
    const [count, setCount] = useState(1);
    const changeCount = action => {
        action === "plus" ? setCount(count + 1) : setCount(count - 1);
    };
    const changeToCustomValue = e => {
        const value = parseInt(e.target.value);
        value ? setCount(value) : setCount(1);
    };
    const ifExists = props.cart.cart.find(food => food.productId === id)
    return (
        <div className="food-info row">
            <div className="col-12 col-md-6 text-start text">
                <h1>{matchedFood.name}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum mollitia enim natus reiciendis quae magnam laudantium eius dignissimos assumenda at, rerum unde ex sequi voluptate quos quia maiores quidem?</p>
                <div className="d-flex">
                    <h2 className="me-5 my-auto">${matchedFood.price}</h2>
                    <div className="my-auto quantity-select">
                        <button className="quantity-control qc-minus" onClick={() => changeCount("minus")}>-</button>
                        <input onChange={changeToCustomValue} type="text" name="quantity" id="food-quantity" value={count} />
                        <button className="quantity-control qc-plus" onClick={() => changeCount("plus")}>+</button>
                    </div>
                </div>
                {!ifExists && <button className="add-rmv-btn" onClick={()=>cart.addToCart(id, count)}>Add</button>}
                {ifExists && <button className="add-rmv-btn" onClick={()=>cart.removeFromCart(ifExists.cartId)}>Remove</button>}
            </div>
            <div className="col-12 col-md-6 justify-contents-center">
                <img width="80%" src={matchedFood.image} alt={matchedFood.name} />
            </div>
        </div>
    );
};

export default FoodInfo;