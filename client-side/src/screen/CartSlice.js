import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemType: '',
    itemSize: '',
    itemPrice: ''
};

export const cartSlice = createSlice({
    name: 'Cart',
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
} = cartSlice.actions;

export const selectItemType = (state) => state.cart.itemType;
export const selectItemSize = (state) => state.cart.itemSize;
export const selectItemPrice = (state) => state.cart.itemPrice;

export default cartSlice.reducer;
