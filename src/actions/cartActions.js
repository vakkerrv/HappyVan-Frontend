// import axios from 'axios'
import api from "../api";
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,

    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL

} from '../constants/cartConstants'

export const fetchCartList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CART_LIST_REQUEST })

        // const {
        //     userLogin: { userInfo },
        // } = getState()

        // Pull a cart either from DB or localStorage
        // const config = {
        // headers: {
        //     'Content-type': 'application/json',
        //     'Authorization': `Bearer ${userInfo.access}`
        //     }
        // }

        const { data } = await api.get(
            `cart/`,)

        dispatch({
            type: CART_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CART_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const addToCart = (sku) => async (dispatch, getState) => {
    const {
        userLogin: { userInfo },
    } = getState()

    const body = {
        sku: sku, username: userInfo.id,
    }

    // const config = {
    //     headers: {
    //         'Content-type': 'application/json',
    //         // Authorization: `Bearer ${userInfo.access}`
    //     }
    // }

    const { data } = await api.post(
        'cart/add/',
        body,
        )

    dispatch({ 
        type: CART_ADD_ITEM, 
        payload: data })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (id) => async (dispatch, getState) => {
    
    const { data } = await api.delete(
        `cart/remove/${id}`)

    dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
    })


    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

