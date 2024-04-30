import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemType: '',
    itemSize: '',
    itemPrice: ''
};

export const addToCartSlice = createSlice({
    name: 'AddToCart',
    initialState,
    reducers: {
        setItemType: (state, action) => {
            state.itemType = action.payload;
        },
        setItemSize: (state, action) => {
            state.itemSize = action.payload;
        },
        setItemPrice: (state, action) => {
            state.itemPrice = action.payload;
        }
    },
});

export const {
    setItemType,
    setItemSize,
    setItemPrice
} = addToCartSlice.actions;

export const selectItemType = (state) => state.addToCart.itemType;
export const selectItemSize = (state) => state.addToCart.itemSize;
export const selectItemPrice = (state) => state.addToCart.itemPrice;

export default addToCartSlice.reducer;
