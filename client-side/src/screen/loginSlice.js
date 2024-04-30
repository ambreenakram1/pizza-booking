import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
    msg: null
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setMessage: (state, action) => {
            state.msg = action.payload;
        }
    },
});

export const {
    setEmail,
    setPassword,
    setMessage
} = loginSlice.actions;

export const selectEmail = (state) => state.LoginScreenState.email;
export const selectPassword = (state) => state.LoginScreenState.password;

export const selectMessage = (state) => state.LoginScreenState.msg;

export default loginSlice.reducer;
