
import React from 'react';
import { navigateToScreen } from "../utils/nav_controller";
import SCREEN from "../models/Screens";
import {useDispatch, useSelector} from "react-redux";
import {selectItemSize, selectItemPrice, setItemPrice, setItemSize} from "./AddtocartSlice";
import axios from "axios";
import {setMessage} from "./loginSlice";

const AddtoCartScreen = () => {

    const user = JSON.parse(window.localStorage.getItem('user'));

    const dispatch = useDispatch();

    const urlParams = new URLSearchParams(window.location.search);
    const itemType = urlParams.get('type');

    const itemPrice = useSelector(selectItemPrice);
    const itemSize = useSelector(selectItemSize);

    if (itemPrice === '' && itemSize === '') {
        if (itemType === 'cheese-pizza') {
            dispatch(setItemPrice('5$'));
            dispatch(setItemSize('small'));
        } else if (itemType === 'vegetable-pizza') {
            dispatch(setItemPrice('6$'));
            dispatch(setItemSize('small'));
        } else if (itemType === 'fries') {
            dispatch(setItemPrice('10$'));
        }
    }

    return (
        <div className="add-to-cart-screen w-screen h-screen flex justify-center items-center">
                <div className="add-to-cart">
                    <div>
                        <img src={itemType === 'cheese-pizza' ? "/assets/th.jpeg" : itemType === 'vegetable-pizza' ? '/assets/th%20(1).jpeg' : '/assets/th%20(2).jpeg'} alt="Cheese Pizza" height="150" width="200"/>
                        <h1>{itemType === 'cheese-pizza' ? 'Cheese Pizza' : itemType === 'vegetable-pizza' ? 'Vegetable Pizza' : 'Fries'}</h1>
                    </div>
                    <div>
                        <p>Price: {itemPrice}</p>
                        {itemType !== 'fries' && <div>
                            <label>
                                <input type="radio"
                                       checked={itemSize === 'small'}
                                       onChange={() => {
                                           if (itemType === 'cheese-pizza') {
                                               dispatch(setItemPrice('5$'));
                                               dispatch(setItemSize('small'));
                                           } else if (itemType === 'vegetable-pizza') {
                                               dispatch(setItemPrice('6$'));
                                               dispatch(setItemSize('small'));
                                           }
                                       }}/>
                                Small
                            </label>
                            <label>
                                <input type="radio"
                                       checked={itemSize === 'medium'}
                                       onChange={() => {
                                           if (itemType === 'cheese-pizza') {
                                               dispatch(setItemPrice('10$'));
                                               dispatch(setItemSize('medium'));
                                           } else if (itemType === 'vegetable-pizza') {
                                               dispatch(setItemPrice('12$'));
                                               dispatch(setItemSize('medium'));
                                           }
                                       }}/>
                                Medium
                            </label>
                            <label>
                                <input type="radio"
                                       checked={itemSize === 'large'}
                                       onChange={() => {
                                           if (itemType === 'cheese-pizza') {
                                               dispatch(setItemPrice('15$'));
                                               dispatch(setItemSize('large'));
                                           } else if (itemType === 'vegetable-pizza') {
                                               dispatch(setItemPrice('18$'));
                                               dispatch(setItemSize('large'));
                                           }
                                       }}/>
                                Large
                            </label>
                        </div>}
                        <div className='py-4'>
                            <button type="button"
                                    className="place-Order-button text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                    onClick={() => {
                                        const params = new URLSearchParams();
                                        params.append('userId', user._id);
                                        params.append('pizzaType', itemType);
                                        params.append('size', itemSize);
                                        params.append('price', itemPrice);

                                        axios
                                            .post('http://localhost:3000/api/add-to-cart', params)
                                            .then(res => {
                                                if (res.data.status === 'SUCCESS') {
                                                    navigateToScreen(SCREEN.CART);
                                                }
                                            })
                                            .catch(err => {
                                                console.log(err);
                                            });
                                    }}>Add to Cart
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

        </div>
    );
}

export default AddtoCartScreen;