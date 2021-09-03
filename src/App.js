import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { addToCart, orderInfo, removeFromCart, setUserInfo } from './redux/actions/cartActions';

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute user={props.userInfo} path="/cart">
            <Cart setUserInfo={props.setUserInfo} userInfo={props.userInfo} cart={props}></Cart>
          </PrivateRoute>
          <Route path="/login">
            <Login setUserInfo={props.setUserInfo} userInfo={props.userInfo}></Login>
          </Route>
          <PrivateRoute user={props.userInfo} path="/order-placed">
            <OrderPlaced props={props}></OrderPlaced>
          </PrivateRoute>
          <Route exact path="/">
            <Homepage setUserInfo={props.setUserInfo} userInfo={props.userInfo} cart={props}></Homepage>
          </Route>
          <Route path="*">
            <NotFound setUserInfo={props.setUserInfo} userInfo={props.userInfo} cart={props}></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    infos: state.infos,
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  orderInfo: orderInfo,
  setUserInfo: setUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);