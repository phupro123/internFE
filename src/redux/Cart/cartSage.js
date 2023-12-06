import { takeEvery, put, } from 'redux-saga/effects';

import axiosClient from '../../api/axios.config';
import { getCartSuccess,addProductCartSuccess, editProductCartSuccess, removeProductCartSuccess  } from './cartAction';
import { GET_CART ,ADD_PRODUCT_CART, EDIT_PRODUCT_CART, REMOVE_PRODUCT_CART } from './cartConstant';

function* getCart() {
    try {
        let res = yield axiosClient.get(`/carts/1`);
        yield put(getCartSuccess(res));
        } catch (error) {
        //handle error
        }
}
function* addProductCart(data) {
    try {
        let res = yield axiosClient.patch(`/carts/addProducts/1`,data.payload);
        yield put(addProductCartSuccess(res));
        } catch (error) {
        //handle error
        }
}
function* removeProductCart(data) {
    try {
        let res = yield axiosClient.patch(`/carts/removeProducts/1/${data.payload._id}`);
        yield put(removeProductCartSuccess(res));
        } catch (error) {
        //handle error
        }
}
function* editProductCart(data) {
    try {
        let res = yield axiosClient.patch(`/carts/editProducts/1`,data.payload);
        yield put(editProductCartSuccess(res));
        } catch (error) {
        //handle error
        }
}

function* onLoadCart() {
    yield takeEvery(GET_CART, getCart);
    yield takeEvery(ADD_PRODUCT_CART, addProductCart);
    yield takeEvery(REMOVE_PRODUCT_CART, removeProductCart);
    yield takeEvery(EDIT_PRODUCT_CART, editProductCart);
}

export default onLoadCart;
