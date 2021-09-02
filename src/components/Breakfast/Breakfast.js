import React from 'react';
import Food from '../Food/Food';
import breakfast from 'src/data/breakfast';
const Breakfast = (props) => {
    return (
        <div>
            <div className="breakfast">
                <div className="row">
                    {
                        breakfast.map(item => <div key={item.key} className="col-12 col-md-4 col-sm-6"><Food id={item.key} name={item.name} des={item.des} price={item.price} type={item.type} image={item.image} showFoodDetail={props.showFoodDetail}></Food></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Breakfast;