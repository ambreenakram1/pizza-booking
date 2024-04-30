import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemSize: '',
    itemPrice: ''
};

export const addToCartSlice = createSlice({
    name: 'AddToCart',
    initialState,
    reducers: {
        setItemSize: (state, action) => {
            state.itemSize = action.payload;
        },
        setItemPrice: (state, action) => {
            state.itemPrice = action.payload;
        }
    },
});

export const {
    setItemSize,
    setItemPrice
} = addToCartSlice.actions;
export const selectItemSize = (state) => state.addToCartScreenState.itemSize;
export const selectItemPrice = (state) => state.addToCartScreenState.itemPrice;

export default addToCartSlice.reducer;
