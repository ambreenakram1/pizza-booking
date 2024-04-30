import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import registerScreenReducer from '../screen/RegisterSlice';
import LoginScreenReducer from '../screen/loginSlice';
import addToCartScreenReducer from '../screen/AddtocartSlice';
import cartScreenReducer from '../screen/CartSlice';


export const store = configureStore({
    reducer: {
        RegisterScreenState: registerScreenReducer,
        LoginScreenState: LoginScreenReducer,
        addToCartScreenState: addToCartScreenReducer,
        cartScreenState:  cartScreenReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
