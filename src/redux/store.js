
import productReducer from './Product/productSlice';

import cartReducer from './Cart/cartSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import productSage from './Product/productSage';
import cartSage from './Cart/cartSage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const appReducer = combineReducers({
    cart:   cartReducer,
    product: productReducer,
   
});
const rootReducer = (state, action) => {
    return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSage);
sagaMiddleware.run(cartSage);
export let persistor = persistStore(store);
