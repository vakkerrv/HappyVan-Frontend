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

    const { data } = await api.post(
        'cart/cart-item/add/',
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


export const createOrder = () => async (dispatch, getState) => {
    const {
        order: { orderItems },
    } = getState()


    const { data } = await api.post(
            `order/new-order/`,
            {subscription_id: 1}) // we should have subscription_id OR we can identify the user with the token


    // Add all current items to the new order 
    for (let i = 0; i < orderItems.length; i++) {
        const item = orderItems[i]

        let body = {
            order_id: data.order_id,
            sku: item.sku.sku,
            status: 'new',
        }

        await api.post(
            `order/order-item/add/`,
            body)
    } 

    // Add new items to the order
    const {
        cart: { cartItems },
    } = getState()

    const cartItemsNew = cartItems.filter(item => item.status === 'new')
    const cartItemsReturn = cartItems.filter(item => item.status === 'return')

    for (let i = 0; i < cartItemsNew.length; i++) {
        const item = cartItemsNew[i]

        let body = {
            order_id: data.order_id,
            sku: item.sku.sku,
            status: 'new',
        } 

        
        await api.post(
            `order/order-item/add/`,
            body)

        await api.delete(
            `cart/cart-item/remove/${item.cart_item_id}`,
            body)
    }



    // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}



