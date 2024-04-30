import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {
    setEmail,
    setPassword,
    setMessage, selectEmail, selectPassword, selectMessage,
} from './loginSlice';
import {navigateToScreen} from "../utils/nav_controller";
import SCREEN from "../models/Screens";

const LoginScreen = () => {
    const dispatch = useDispatch();

    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const msg = useSelector(selectMessage);

    const handleEmailChange = (e) => {
        dispatch(setEmail(e.target.value));
    };

    const handlePasswordChange = (e) => {
        dispatch(setPassword(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();
        params.append('email', email);
        params.append('password', password);

        axios
            .post('http://localhost:3000/api/login-user', params)
            .then(res => {
                if (res.data.status === 'SUCCESS') {
                    const user = res.data.data;
                    window.localStorage.setItem('user', JSON.stringify(user));
                    navigateToScreen(SCREEN.DASHBOARD);
                } else {
                    dispatch(setMessage(res.data.message));
                }
            })
            .catch(err => {
                console.log(err);
                dispatch(setMessage('Something Went Wrong, Try Again!'));
            });
    };

    return (
        <div className="w-screen h-screen bg-blue-500 flex flex-col justify-center items-center gap-4">
            {msg && <div className="bg-green-500 text-white text-2xl">{msg}</div>}
            <div className="bg-white p-8 rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label id="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email"
                               className="border border-gray-300 px-4 py-2 rounded-md w-full"
                               onChange={handleEmailChange} value={email}/>
                    </div>
                    <div className="mb-4">
                        <label id="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password"
                               className="border border-gray-300 px-4 py-2 rounded-md w-full"
                               onChange={handlePasswordChange} value={password}/>
                    </div>
                    <p>Don't have an account? <span onClick={() => navigateToScreen(SCREEN.REGISTER)}>REGISTER</span>
                    </p>
                    <button type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;
