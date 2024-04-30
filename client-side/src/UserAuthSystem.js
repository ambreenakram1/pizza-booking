import React, {useEffect} from 'react';
import DashboardScreen from "./screen/DashboardScreen";
import RegisterScreen from "./screen/RegisterScreen";
import LoginScreen from "./screen/LoginScreen";
import CartScreen from "./screen/Cart";
import AddToCartScreen from "./screen/Add_to_cart";
import { navigateToScreen } from "./utils/nav_controller";
import SCREEN from "./models/Screens";

const UserAuthSystem = () => {
    const url = new URL(window.location.href);
    const screenParam = url.searchParams.get('screen');

    if (screenParam === SCREEN.LOGIN) {
        return <LoginScreen/>;
    } else if (screenParam === SCREEN.REGISTER) {
        return <RegisterScreen />;
    } else if (screenParam === SCREEN.DASHBOARD) {
        return <DashboardScreen firstName={'Ambreen'} lastName={'Akram'} logout={e => {
            localStorage.removeItem('userId');
            navigateToScreen(SCREEN.LOGIN);
        }} />;
    } else if (screenParam === SCREEN.CART) {
        return <CartScreen />;
    } else if (screenParam === SCREEN.ADD_TO_CART) {
        return <AddToCartScreen />;
    } else {
        navigateToScreen(SCREEN.LOGIN);
    }

    return null;
}

export default UserAuthSystem;
