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

        if (window.localStorage.getItem('user')) {
            navigateToScreen(SCREEN.DASHBOARD);
        }

        return <LoginScreen/>;
    } else if (screenParam === SCREEN.REGISTER) {
        return <RegisterScreen />;
    } else if (screenParam === SCREEN.DASHBOARD) {
        if (window.localStorage.getItem('user') === null) {
            navigateToScreen(SCREEN.LOGIN);
        }

        return <DashboardScreen />;
    } else if (screenParam === SCREEN.CART) {
        return <CartScreen />;
    } else if (screenParam === SCREEN.ADD_TO_CART) {

        if (!url.searchParams.get('type')) {
            navigateToScreen(SCREEN.DASHBOARD);
        }

        return <AddToCartScreen />;
    } else {
        navigateToScreen(SCREEN.LOGIN);
    }

    return null;
}

export default UserAuthSystem;
