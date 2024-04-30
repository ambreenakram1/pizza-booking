
import React from 'react';
import { navigateToScreen } from "../utils/nav_controller";
import SCREEN from "../models/Screens";

const DashboardScreen = ({ firstName, lastName, Logout }) => {
    if (window.localStorage.getItem('user') === null) {
        navigateToScreen(SCREEN.LOGIN);
    }

    const user = JSON.parse(window.localStorage.getItem('user'));

    return (
        <div className="dashboard-screen w-screen h-screen flex justify-center items-center">
            <div className="dashboard-screen-container flex flex-col items-center justify-around">
                <p className="mb-4">Welcome {user.firstName} {user.lastName}</p>
                <div className="top-area flex  justify-around gap-10">
                    <h1 className="flex flex-col items-center pt-5">Available Pizza Flavors</h1>

                </div>

                <div className="middle-area pt-5">
                    <div className="cheese-Pizza flex p-5" onClick={() => navigateToScreen(SCREEN.ADD_TO_CART,  `type=cheese-pizza`)}>
                        <img src="/assets/th.jpeg" alt="Cheese Pizza" height="150" width="200"/>

                        <h3 className="p-5">Cheese Pizza</h3>
                    </div>

                    <div className="vegetable-Pizza flex p-5" onClick={() => navigateToScreen(SCREEN.ADD_TO_CART, 'type=vegetable-pizza')}>
                        <img src="/assets/th%20(1).jpeg" alt="Vegetable Pizza" height="180" width="200"/>
                        <h3 className="p-5">Vegetable Pizza</h3>
                    </div>

                    <div className="fries flex p-5" onClick={() => navigateToScreen(SCREEN.ADD_TO_CART, 'type=fries')}>
                        <img src="/assets/th%20(2).jpeg" alt="Fries" height="200" width="200"/>
                        <h3 className="p-5">Fries</h3>
                    </div>
                </div>

                <div className="bottom-area flex justify-center items-center w-full pt-5">
                    <div className="p-5 flex">
                        <button
                            id="logoutButton"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {
                                window.localStorage.removeItem('user');
                                navigateToScreen(SCREEN.LOGIN);
                            }}
                        >
                            LOGOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardScreen;