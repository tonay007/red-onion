import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = (props) => {
    let orderInfo = props.cart.infos;
    orderInfo = { ...orderInfo }
    const handleSetValue = e => {
        orderInfo[e.target.name] = e.target.value;
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.cart.orderInfo(orderInfo)
    }
    return (
        <div className="cart container">
            {props.cart.cart.length ? <div className="row">
                <div className="col-md-5 col-12 me-5">
                    <h5>Edit Delivery Details</h5>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input required onKeyUp={handleSetValue} name="addressLine1" placeholder="House Name or Number" type="text" className="form-control" />
                        <input required onKeyUp={handleSetValue} name="addressLine2" placeholder="Colony or Village Name" type="text" className="form-control" />
                        <input required onKeyUp={handleSetValue} name="post" placeholder="Post Office" type="text" className="form-control" />
                        <input required onKeyUp={handleSetValue} name="district" placeholder="District" type="text" className="form-control" />
                        <input onKeyUp={handleSetValue} name="ins" placeholder="Delivery Instruction" type="text" className="form-control" />
                        <input onKeyUp={handleSetValue} className="submit form-control" type="submit" value="Save and Continue" />
                    </form>
                </div>
                <div className="col-md-3 col-12 ms-auto">
                    <h6>{props.cart.infos.district && "From: Red Onion " + props.cart.infos.district + " Branch GPR"}</h6>
                    <h6>{props.cart.infos.district && "Arriving in 20-25 Minutes"}</h6>
                    <h6>{props.cart.infos.district && props.cart.infos.addressLine1 + ", " + props.cart.infos.addressLine2}</h6>
                    {
                        props.cart.cart.map(item => <CartItem key={item.productId} cart={props.cart} item={item}></CartItem>)
                    }

                </div>
            </div>: <h1>No item in cart</h1>}
        </div>
    );
};

export default Cart;