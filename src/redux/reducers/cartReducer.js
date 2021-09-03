import { ADD_TO_CART, ORDER_INFO, REMOVE_FROM_CART, SET_USER_INFO } from "../actions/cartActions";

const initialState = {
    cart: [],
    infos: {},
    userInfo: {
        isLoggedIn: false,
        name: '',
        email: '',
        password: ''
    }
}
const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                count: action.count,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart };
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return { ...state, cart: remainingCart };
        case ORDER_INFO:
            const infos = action.infos;
            return { ...state, infos: infos };
        case SET_USER_INFO:
            const userInfo = action.userInfo;
            return { ...state, userInfo: userInfo }
        default:
            return state;
    }
}

export default cartReducers;