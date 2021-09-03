export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ORDER_INFO = 'ORDER_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';

export const addToCart = (/** @type {any} */ id, /** @type {any} */ count) => {
    return { type: ADD_TO_CART, id, count };
};

export const removeFromCart = (/** @type {any} */ id) => {
    return { type: REMOVE_FROM_CART, id };
};

export const orderInfo = (/** @type {any} */ infos) => {
    return { type: ORDER_INFO, infos };
};

export const setUserInfo = (/** @type {any} */ userInfo) => {
    return { type: SET_USER_INFO, userInfo };
};