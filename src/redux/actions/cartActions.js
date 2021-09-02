export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ORDER_INFO = 'ORDER_INFO';

export const addToCart = (id, count) => {
    return { type: ADD_TO_CART, id, count };
};

export const removeFromCart = id => {
    return { type: REMOVE_FROM_CART, id };
};

export const orderInfo = infos => {
    return { type: ORDER_INFO, infos };
};