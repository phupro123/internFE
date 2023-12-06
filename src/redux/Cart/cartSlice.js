import { ADD_PRODUCT_CART, EDIT_PRODUCT_CART, GET_CART, GET_CART_SUCCESS,REMOVE_PRODUCT_CART,ADD_PRODUCT_CART_SUCCESS,EDIT_PRODUCT_CART_SUCCESS,REMOVE_PRODUCT_CART_SUCCESS } from "./cartConstant";


const INITIAL_STATE={
    products:[],
    load:false,
    
}

const cartReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case GET_CART:
        case ADD_PRODUCT_CART:
        case EDIT_PRODUCT_CART:
        case REMOVE_PRODUCT_CART:
            return {
                ...state,
                load: true,
            };
        case GET_CART_SUCCESS:
        case ADD_PRODUCT_CART_SUCCESS:
        case EDIT_PRODUCT_CART_SUCCESS:
        case REMOVE_PRODUCT_CART_SUCCESS:
            const { elements } = action.payload;
            return {
                ...state,
                products: elements.products,
                load: false,
            };
       
        default:
            return state;
    }
};

export default cartReducer;
