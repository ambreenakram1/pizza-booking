import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
};

export const registerSlice = createSlice({
    name: 'Register',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.first_name = action.payload;
        },
        setLastName: (state, action) => {
            state.last_name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        }
    },
});

export const {
    setFirstName,
    setLastName,
    setEmail,
    setPassword
} = registerSlice.actions;

export const selectFirstName = (state) => state.RegisterScreenState.first_name;
export const selectLastName = (state) => state.RegisterScreenState.last_name;
export const selectEmail = (state) => state.RegisterScreenState.email;
export const selectPassword = (state) => state.RegisterScreenState.password;

export default registerSlice.reducer;
