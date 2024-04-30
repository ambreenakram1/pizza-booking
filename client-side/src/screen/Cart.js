import React, { useState } from 'react';
import { navigateToScreen } from "../utils/nav_controller";
import SCREEN from "../models/Screens";

const CartScreen = () => {
    const [selectedItemType, setSelectedItemType] = useState(null);

    return (
        <div className="cart-screen w-screen h-screen flex justify-center items-center">
            <div className="cart-content">
                {/*{selectedItemType === 'cheese-pizza' && (*/}
                    <div className="image-container">
                        <img src="/assets/th.jpeg" alt="Cheese Pizza" height="150" width="200" />
                        <h1>Cheese Pizza</h1>
                        <div>
                            <p>Size: Large</p>
                            <p>Price: $10</p>
                        </div>
                    </div>
                {/*)}*/}
                {selectedItemType === 'vegetable-pizza' && (
                    <div className="image-container">
                        <img src="/assets/th%20(1).jpeg" alt="Vegetable Pizza" height="180" width="200"/>
                        <h1>Vegetable Pizza</h1>
                        <div>
                            <p>Size: Medium</p>
                            <p>Price: $12</p>
                        </div>
                    </div>
                )}
                {selectedItemType === 'fries' && (
                    <div className="image-container">
                        <img src="/assets/th%20(2).jpeg" alt="Fries" height="200" width="200"/>
                        <h1>Fries</h1>
                        <div>
                            <p>Price: $6</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="cart-buttons mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
                    onClick={() => navigateToScreen(SCREEN.BACK)}
                >
                    Go Back
                </button>
                <button
                    className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
                    onClick={() => navigateToScreen(SCREEN.PLACE_ORDER)}
                >
                    Place Order
                </button>
            </div>
        </div>
    );
}

export default CartScreen;
