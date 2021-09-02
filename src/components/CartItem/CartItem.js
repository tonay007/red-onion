import React, { useState } from 'react';
import allFoods from 'src/data/allFoods';

const CartItem = (props) => {
    const { productId, count, cartId } = props.item;
    const [fdCount, setFdCount] = useState(count);
    const changeCount = action => {
        action === "plus" ? setFdCount(fdCount + 1) : setFdCount(fdCount - 1);
    };
    const matchedFood = allFoods.find(food => food.key === productId);
    const changeToCustomValue = e => {
        const value = parseInt(e.target.value);
        value ? setFdCount(value) : setFdCount(1);
    };
    return (
        <div className="bg-light">
            <div className="row food-item mt-3">
                <div className="col-3">
                    <img className="mx-auto my-auto" src={matchedFood.image} alt={matchedFood.name} width="100%" />
                </div>
                <div className="col-3">
                    <div className="my-auto">
                        <p><b><small>{matchedFood.name}</small></b></p>
                        <h6>{matchedFood.price}</h6>
                    </div>
                </div>
                <div className="col-4 d-flex quantity-control">
                    <button onClick={() => {changeCount("minus")}}>- </button> <input onChange={changeToCustomValue} value={fdCount} type="text" className="text-center" /> <button onClick={() => {changeCount("plus")}}> +</button>
                </div>
                <div className="col-1">
                    <button onClick={()=>props.cart.removeFromCart(cartId)}>X</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;