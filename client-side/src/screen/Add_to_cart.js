
import React from 'react';
import { navigateToScreen } from "../utils/nav_controller";
import SCREEN from "../models/Screens";

const AddtoCartScreen = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const itemType = urlParams.get('type');
    const itemSize = urlParams.get('size');
    const itemPrice = urlParams.get('price');

    return (
        <div className="add-to-cart-screen w-screen h-screen flex justify-center items-center">
            {itemType === 'cheese-pizza' && (
                <div className="add-to-cart">
                    <div>
                        <img src="/assets/th.jpeg" alt="Cheese Pizza" height="150" width="200"/>
                        <h1>Cheese Pizza</h1>
                    </div>
                    <div>
                        <p>Size: {itemSize}</p>
                        <p>Price: {itemPrice}</p>
                        <div>
                            <label>
                                <input type="radio"
                                       onChange={() => navigateToScreen(SCREEN.ADD_TO_CART, `type=${itemType}&size=small&price=$6`)}/>
                                Small
                            </label>
                            <label>
                                <input type="radio"
                                       onChange={() => navigateToScreen(SCREEN.ADD_TO_CART, `type=${itemType}&size=medium&price=$12`)}/>
                                Medium
                            </label>
                            <label>
                                <input type="radio"
                                       onChange={() => navigateToScreen(SCREEN.ADD_TO_CART, `type=${itemType}&size=large&price=$18`)}/>
                                Large
                            </label>
                        </div>
                        <div className='py-4'>
                            <button type="button"
                                    className="place-Order-button text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                    onClick={() => navigateToScreen(SCREEN.CART)}>Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <button
                                type="button"
                                className="view-cart-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 "
                                onClick={() => navigateToScreen(SCREEN.CART)}
                            >
                                View Cart
                            </button>
                        </div>
                        <div className="p-8 mx-8">
                            <button
                                type="button"
                                className="place-order-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4"
                                onClick={() => navigateToScreen(SCREEN.CART)}
                            >
                                PLACE ORDER
                            </button>
                        </div>
                    </div>


                </div>
            )}

            {itemType === 'vegetable-pizza' && (
                <div className="add-to-cart">
                    <div>
                        <img src="/assets/th%20(1).jpeg" alt="Vegetable Pizza" height="180" width="200"/>
                        <h1>Vegetable Pizza</h1>
                    </div>
                    <div>
                        <p>Size: {itemSize}</p>
                        <p>Price: {itemPrice}</p>
                        <div>
                            <label>
                                <input type="radio"
                                       onChange={() => navigateToScreen(SCREEN.ADD_TO_CART, `type=${itemType}&size=small&price=$6`)}/>
                                Small
                            </label>
                            <label>
                                <input type="radio"
                                       onChange={() => navigateToScreen(SCREEN.ADD_TO_CART, `type=${itemType}&size=medium&price=$12`)}/>
                                Medium
                            </label>
                            <label>
                                <input type="radio"
                                       onChange={() => navigateToScreen(SCREEN.ADD_TO_CART, `type=${itemType}&size=large&price=$18`)}/>
                                Large
                            </label>
                        </div>
                        <div className='py-4' >
                            <button type="button"
                                    className="place-Order-button text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                    onClick={() => navigateToScreen(SCREEN.CART)}>Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <button
                                type="button"
                                className="view-cart-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 "
                                onClick={() => navigateToScreen(SCREEN.CART)}
                            >
                                View Cart
                            </button>
                        </div>
                        <div className="p-8 mx-8">
                            <button
                                type="button"
                                className="place-order-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4"
                                onClick={() => navigateToScreen(SCREEN.CART)}
                            >
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {itemType === 'fries' && (
                <div className="add-to-cart">
                    <div>
                        <img src="/assets/th%20(2).jpeg" alt="Fries" height="200" width="200"/>
                        <h1>Fries</h1>
                    </div>
                    <p>Price: $6</p>
                    <div className='py-4'>
                        <button type="button"
                                className="place-Order-button text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                onClick={() => navigateToScreen(SCREEN.CART)}>Add to Cart
                        </button>

                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <button
                                    type="button"
                                    className="view-cart-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 "
                                    onClick={() => navigateToScreen(SCREEN.CART)}
                                >
                                    View Cart
                                </button>
                            </div>
                            <div className="p-8 mx-8">
                                <button
                                    type="button"
                                    className="place-order-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4"
                                    onClick={() => navigateToScreen(SCREEN.CART)}
                                >
                                    PLACE ORDER
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddtoCartScreen;