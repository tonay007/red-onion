import React from 'react';
import Food from '../Food/Food';
import dinner1 from '../../img/dinner/dinner1.png';
import dinner2 from '../../img/dinner/dinner2.png';
import dinner3 from '../../img/dinner/dinner3.png';
import dinner4 from '../../img/dinner/dinner4.png';
import dinner5 from '../../img/dinner/dinner5.png';
import dinner6 from '../../img/dinner/dinner6.png';

const Dinner = () => {
    return (
        <div>
            <div className="dinner">
            <div className="row">
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Salmon with Grapefruit and Lentil Salad" des="How we dream about our future" price="9.99" image={dinner1}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Lemony Salmon Piccata" des="How we dream about our future" price="10.99" image={dinner2}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Pork Tenderloin with Quinoa Pilaf" des="How we dream about our future" price="12.99" image={dinner3}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="French Fries with Cheese" des="How we dream about our future" price="8.99" image={dinner4}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Garlic Butter Baked Salmon" des="How we dream about our future" price="6.99" image={dinner5}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Baked Chicken" des="How we dream about our future" price="9.99" image={dinner6}></Food>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Dinner;