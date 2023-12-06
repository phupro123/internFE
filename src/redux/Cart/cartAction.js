import { GET_CART,GET_CART_SUCCESS,ADD_PRODUCT_CART, ADD_PRODUCT_CART_SUCCESS, EDIT_PRODUCT_CART, EDIT_PRODUCT_CART_SUCCESS, REMOVE_PRODUCT_CART, REMOVE_PRODUCT_CART_SUCCESS } from './cartConstant';

export const getCart = (payload) => {
    return {
        type: GET_CART,
        payload,
    };
};

export const getCartSuccess = (payload) => {
    return {
        type: GET_CART_SUCCESS,
        payload,
    };
};

export const addProductCart = (payload) => {
    return {
        type: ADD_PRODUCT_CART,
        payload,
    };
};

export const addProductCartSuccess = (payload) => {
    return {
        type: ADD_PRODUCT_CART_SUCCESS,
        payload,
    };
};

export const removeProductCart = (payload) => {
    return {
        type: REMOVE_PRODUCT_CART,
        payload,
    };
};

export const removeProductCartSuccess = (payload) => {
    return {
        type: REMOVE_PRODUCT_CART_SUCCESS,
        payload,
    };
};

export const editProductCart = (payload) => {
    return {
        type: EDIT_PRODUCT_CART,
        payload,
    };
};

export const editProductCartSuccess = (payload) => {
    return {
        type: EDIT_PRODUCT_CART_SUCCESS,
        payload,
    };
};