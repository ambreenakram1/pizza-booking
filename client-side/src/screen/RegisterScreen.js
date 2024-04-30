import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setFirstName,
    setLastName,
    setEmail,
    setPassword, selectFirstName, selectLastName, selectEmail, selectPassword,
} from './RegisterSlice';
import axios from "axios";
import {navigateToScreen} from "../utils/nav_controller";
import SCREEN from "../models/Screens";


const RegisterScreen = () => {

    if (window.localStorage.getItem('user') !== null) {
        navigateToScreen(SCREEN.DASHBOARD);
    }

    const dispatch = useDispatch();

    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const handleFirstNameChange = (e) => {
        dispatch(setFirstName(e.target.value));
    };


    const handleLastNameChange = (e) => {
        dispatch(setLastName(e.target.value));
    };

    const handleEmailChange = (e) => {
        dispatch(setEmail(e.target.value));
    };

    const handlePasswordChange = (e) => {
        dispatch(setPassword(e.target.value));
    };

    const handleSubmit = (e) => {

        const params = new URLSearchParams();
        params.append('first_name', firstName);
        params.append('last_name', lastName);
        params.append('email', email);
        params.append('password', password);

        axios
            .post('http://localhost:3000/api/register-user', params)
            .then(res => {
                if (res.data.status === 'SUCCESS') {
                    window.localStorage.setItem('msg', 'Account Registered Successfully!')
                    navigateToScreen(SCREEN.LOGIN);
                }
            })
            .catch(err => {
                console.log(err);
            });

    };

    return (
        <div className="w-screen h-screen bg-green-500 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Register Page</h1>
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label id ="firstName" className="block text-gray-700 font-semibold mb-2">First Name</label>
                            <input type="text" id="firstName" name="firstName" className="border border-gray-300 px-4 py-2 rounded-md w-full" onChange={handleFirstNameChange} value={firstName} />
                        </div>
                        <div className="mb-4">
                            <label id ="lastName" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                            <input type="text" id="lastName" name="lastName" className="border border-gray-300 px-4 py-2 rounded-md w-full" onChange={handleLastNameChange} value={lastName}/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label id ="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="border border-gray-300 px-4 py-2 rounded-md w-full" onChange={handleEmailChange} value={email}/>
                    </div>
                    <div className="mb-4">
                        <label id ="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="border border-gray-300 px-4 py-2 rounded-md w-full" onChange={handlePasswordChange} value={password}/>
                    </div>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600" onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </div>
    );
}

export default RegisterScreen;