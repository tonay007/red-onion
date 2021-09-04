import React from 'react';
import { Link } from 'react-router-dom';
import allFoods from 'src/data/allFoods';
import CartItem from '../CartItem/CartItem';
import Navbar from '../Navbar/Navbar';
import './Cart.css';

const Cart = (props) => {
    let orderInfo = props.cart.infos;
    orderInfo = { ...orderInfo }
    const handleSetValue = e => {
        orderInfo[e.target.name] = e.target.value;
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.cart.orderInfo(orderInfo);
    }
    let subTotal = 0;
    props.cart.cart.map(item => {
        subTotal = subTotal + allFoods.find(food=> item.productId === food.key).price * item.count;
        return 1;
    })
    subTotal = parseFloat(subTotal.toFixed(2));
    const VAT = parseFloat((subTotal*0.05).toFixed(2));
    const deliveryFee = parseFloat((subTotal*0.02).toFixed(2));
    const total = parseFloat((subTotal + VAT + deliveryFee).toFixed(2))
    return (
        <div className="cart container">
            <Navbar setUserInfo={props.setUserInfo} userInfo={props.userInfo} cart={props.cart.cart}></Navbar>
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
                    <h6 className="mt-5">Subtotal: {subTotal}$</h6>
                    <h6>VAT (5%): {VAT}$</h6>
                    <h6>Delivery Fee: {deliveryFee}$</h6>
                    <h6>Total: {total}$</h6>
                    {
                        props.cart.infos.district && <Link style={{textDecoration: "none"}} to="/order-placed"><button className="btn btn-danger w-100 mb-5">Place Order</button></Link>
                    }
                </div>
            </div>: <h1>No item in cart</h1>}
        </div>
    );
};

export default Cart;