import React from 'react';
import WhyYouChooseUsSlider from '../WhyYouChooseUsSlider/WhyYouChooseUsSlider';
import './WhyYouChooseUs.css';
import image1 from '../../img/adult-blur-blurred-background-687824.png';
import image2 from '../../img/chef-cook-food-33614.png';
import image3 from '../../img/architecture-building-city-2047397.png';
import icon1 from '../../img/icon/icon1.png';
import icon2 from '../../img/icon/icon2.png';
import icon3 from '../../img/icon/icon3.png';

const WhyYouChooseUs = () => {
    return (
        <div className="why-you-choose-us container">
            <h3><b>Why you choose us</b></h3>
            <p><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias modi debitis, pariatur unde quidem laborum culpa reiciendis veniam iusto ullam.</small></p>
            <div className="mt-4 slider-container row">
                <div className="col-12 col-md-4">
                    <WhyYouChooseUsSlider title="Fast Delivery" des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a dolorum distinctio voluptate expedita delectus molestias, aspernatur soluta atque totam fugiat rem veritatis eius quos?" image={image1} icon={icon1}></WhyYouChooseUsSlider>
                </div>
                <div className="col-12 col-md-4">
                    <WhyYouChooseUsSlider title="A Good Auto Responder" des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a dolorum distinctio voluptate expedita delectus molestias, aspernatur soluta atque totam fugiat rem veritatis eius quos?" image={image2} icon={icon2}></WhyYouChooseUsSlider>
                </div>
                <div className="col-12 col-md-4">
                    <WhyYouChooseUsSlider title="Home Delivery" des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a dolorum distinctio voluptate expedita delectus molestias, aspernatur soluta atque totam fugiat rem veritatis eius quos?" image={image3} icon={icon3}></WhyYouChooseUsSlider>
                </div>
            </div>
        </div>
    );
};

export default WhyYouChooseUs;