import { takeEvery, put, takeLatest } from 'redux-saga/effects';

import axiosClient from '../../api/axios.config';
import { getListProductSuccess } from './productAction';
import { GET_LIST_PRODUCT } from './productConstant';
function* getProducts() {
    try {
        let res = yield axiosClient.get(`/products`);
        yield put(getListProductSuccess(res));
        } catch (error) {
        //handle error
        }
}

function* onLoadProduct() {
    yield takeEvery(GET_LIST_PRODUCT, getProducts);
    
}

export default onLoadProduct;
