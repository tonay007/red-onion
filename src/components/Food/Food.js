import React from 'react';
import './Food.css';

const Food = (props) => {
    const { name, des, price, image, showFoodDetail, id} = props;
    const showDetail = () => {
        showFoodDetail(id)
    }
    return (
        <div className="food" onClick={showDetail}>
            <img className="mb-3" src={image} alt={name} />
            <h6>{name}</h6>
            <p><small>{des}</small></p>
            <h5>${price}</h5>
        </div>
    );
};

export default Food;