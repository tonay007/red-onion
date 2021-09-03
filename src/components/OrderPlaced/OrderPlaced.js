import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const OrderPlaced = (props) => {
    props.props.cart.map(food => {
        props.props.removeFromCart(food.cartId)
        return 1;
    })
    let newInfos = props.props.infos;
    newInfos.addressLine1 = '';
    newInfos.addressLine2 = '';
    newInfos.district = '';
    props.props.orderInfo(newInfos)
    return (
        <div>
            <Navbar setUserInfo={props.props.setUserInfo} userInfo={props.props.userInfo} cart={props.props.cart}></Navbar>
            <div style={{height: '80vh'}} className="d-flex flex-column align-items-center justify-content-center text-center">
                <div>
                    <h2>Congrats! Order placed!</h2>
                    <Link className="btn btn-danger" to="/">Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default OrderPlaced;