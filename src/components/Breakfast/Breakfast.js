import React from 'react';
import Food from '../Food/Food';
import breakfast1 from '../../img/breakfast/breakfast-1.png';
import breakfast2 from '../../img/breakfast/breakfast-2.png';
import breakfast3 from '../../img/breakfast/breakfast-3.png';
import breakfast4 from '../../img/breakfast/breakfast-4.png';
import breakfast5 from '../../img/breakfast/breakfast-5.png';
import breakfast6 from '../../img/breakfast/breakfast-6.png';

const Breakfast = () => {
    return (
        <div>
            <div className="breakfast">
            <div className="row">
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Bagel and Cream Cheese" des="How we dream about our future" price="6.99" image={breakfast1}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Breakfast Sandwich" des="How we dream about our future" price="9.99" image={breakfast2}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Baked Chicken" des="How we dream about our future" price="10.99" image={breakfast3}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Eggs Benedict" des="How we dream about our future" price="8.99" image={breakfast4}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Toast Croissant Fried Egg" des="How we dream about our future" price="19.99" image={breakfast5}></Food>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <Food name="Cheap Breakfast" des="How we dream about our future" price="3.99" image={breakfast6}></Food>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Breakfast;