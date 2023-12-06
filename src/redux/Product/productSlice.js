import { GET_LIST_PRODUCT, GET_LIST_PRODUCT_SUCCESS } from "./productConstant";

const INITIAL_STATE={
    products:[],
    load:false,
    total:0
}

const productsReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case GET_LIST_PRODUCT:
            return {
                ...state,
                load: true,
            };
        case GET_LIST_PRODUCT_SUCCESS:
            const { elements,total } = action.payload;
            return {
                ...state,
                products: elements,
                load: false,
                total:total
            };
       
        default:
            return state;
    }
};

export default productsReducer;
