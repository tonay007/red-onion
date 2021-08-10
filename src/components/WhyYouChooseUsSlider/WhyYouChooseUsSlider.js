import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WhyYouChooseUsSlider = (props) => {
    const {title, des, image, icon} = props;
    return (
        <div>
            <img width="100%" src={image} alt={title} />
            <div className="mt-4 row">
                <div className="col-2 col-md-2">
                    <img src={icon} alt="icon" />
                </div>
                <div className="col-10 col-md-10">
                    <h6><b>{title}</b></h6>
                    <p style={{width: "100%"}}><small>{des}</small></p>
                    <a style={{textDecoration: 'none', fontSize: '.9rem', fontWeight: 'bold'}} href="/">See More            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </a>
                </div>
            </div>
        </div>
    );
};

export default WhyYouChooseUsSlider;