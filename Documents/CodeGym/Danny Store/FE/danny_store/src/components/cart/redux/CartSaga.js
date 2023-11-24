import axios from "axios";
import { call, put, select, take, takeLatest } from "redux-saga/effects";
import { ADD_TO_CART, DELETE_SINGLE_CART, GET_CART_LIST, GET_USER, UPDATE_CART_LIST, UPDATE_COLOR_ID, UPDATE_QUANTITY, UPDATE_SIZE_ID, UPDATE_TOTAL_MONEY, UPDATE_USER } from "./Action";
import { userConverterFromToken } from "../../../service/AuthService";
import { handleTotalMoney } from "../../common/CommonFunc";


const BASE_URL = "http://localhost:8080/api/admin/home"

function* getCartList() {
    try {
        const username = userConverterFromToken().sub;
        const data = yield axios.get(`http://localhost:8080/api/user/get-app-user-id/${username}`);
        const response = yield axios.get(BASE_URL + `/get-cart-detail?user_id=${data.data}`);
        const totalMoney = handleTotalMoney(response.data);
        yield put({ type: UPDATE_TOTAL_MONEY, payload: totalMoney })
        yield put({ type: UPDATE_CART_LIST, payload: response.data })
    } catch (error) {
        console.log(error);
    }
}

function* deleteSingleCart(action) {
    try {
        yield axios.delete(BASE_URL + `/delete-single-product?cart_id=${action.payload}`);
        yield getCartList();
    } catch (error) {
        console.log(error);
    }
}

function* addToCart(action) {
    try {
        yield axios.post(BASE_URL + `/add-to-cart?user_id=${action.payload.user_id}&product_id=${action.payload.product_id}&size_id=${action.payload.size_id}&price=${action.payload.price}`);
        yield getCartList();
    } catch (error) {
        console.log(error);
    }
}

function* getUser() {
    try {
        const username = userConverterFromToken().sub;
        const id = yield axios.get(`http://localhost:8080/api/user/get-app-user-id/${username}`);
        yield put({ type: UPDATE_USER, payload: [id.data, username] });
    } catch (error) {
        console.log(error);
    }
}

function* updateQuantityByCartId(action) {
    try {
        yield axios.patch(BASE_URL + `/update-quantity?cart_id=${action.payload.cart_id}&quantity=${action.payload.quantity}`)
        yield getCartList();
    } catch (error) {
        console.log(error);
    }
}

function* updateColorId(action) {
    try {
        yield axios.patch(BASE_URL + `/update-product-id?cart_id=${action.payload.cart_id}&product_id=${action.payload.product_id}`)
        yield getCartList();
    } catch (error) {
        console.log(error);
    }
}
function* updateSizeId(action) {
    try {
        yield axios.patch(BASE_URL + `/update-size-id?cart_id=${action.payload.cart_id}&size_id=${action.payload.size_id}`)
        yield getCartList();
    } catch (error) {
        console.log(error);

    }
}

export default function* rootSaga() {
    yield takeLatest(GET_CART_LIST, getCartList);
    yield takeLatest(DELETE_SINGLE_CART, deleteSingleCart);
    yield takeLatest(ADD_TO_CART, addToCart);
    yield takeLatest(GET_USER, getUser);
    yield takeLatest(UPDATE_QUANTITY, updateQuantityByCartId);
    yield takeLatest(UPDATE_COLOR_ID, updateColorId);
    yield takeLatest(UPDATE_SIZE_ID, updateSizeId);
}
