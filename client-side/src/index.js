import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import LoginScreen from "./screen/LoginScreen";
import UserAuthSystem from "./UserAuthSystem";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(

    <Provider store={store}>
        <UserAuthSystem/>
    </Provider>
);


