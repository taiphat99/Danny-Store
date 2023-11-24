import { GET_CART_LIST, UPDATE_CART_LIST, UPDATE_TOTAL_MONEY, UPDATE_USER } from "./Action"

const initialState = {
    cartList: [],
    user: { id: null, username: null },
    totalMoney: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CART_LIST:
            console.log(4);
            return { ...state, cartList: action.payload };
        case UPDATE_USER:
            return { ...state, user: { id: action.payload[0], username: action.payload[1] } }
        case UPDATE_TOTAL_MONEY:
            return { ...state, totalMoney: action.payload }
        default:
            return initialState;
    }
}
export default rootReducer;