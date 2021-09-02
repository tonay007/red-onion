import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import { addToCart, orderInfo, removeFromCart } from './redux/actions/cartActions';

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <Navbar cart={props.cart}></Navbar>
        <Switch>
          <Route path="/cart">
            <Cart cart={props}></Cart>
          </Route>
          <Route exact path="/">
            <Homepage cart={props}></Homepage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    infos: state.infos
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  orderInfo: orderInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);