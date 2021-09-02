import React from 'react';
import Food from '../Food/Food';
import dinner from 'src/data/dinner';

const Dinner = (props) => {
    return (
        <div>
            <div className="dinner">
                <div className="row">
                    {
                        dinner.map(item => <div key={item.key} className="col-12 col-md-4 col-sm-6"><Food id={item.key} name={item.name} des={item.des} price={item.price} type={item.type} image={item.image} showFoodDetail={props.showFoodDetail}></Food></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dinner;