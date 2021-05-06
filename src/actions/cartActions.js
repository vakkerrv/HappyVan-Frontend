import api from "../api";
import { v4 as uuidv4 } from 'uuid';

import {
    CART_ADD_ITEM,
    CART_ADD_LIST_ITEM,
    CART_REMOVE_ITEM,

    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL

} from '../constants/cartConstants'

export const fetchCartList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CART_LIST_REQUEST })

        const { data } = await api.get(
            `cart/`,)

        dispatch({
            type: CART_LIST_SUCCESS,
            payload: data
        })

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

    } catch (error) {
        dispatch({
            type: CART_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const addToCart = (item_id) => async (dispatch, getState) => {

    const { userInfo } = getState().userLogin

    // let data_dispatch = { item_id: {id: item_id} }
    let id_fetched_or_generated

    if (userInfo){

        const body = {
            item_id: item_id, 
        }

        const { data: {id} } = await api.post(
            'cart/cart-item/add/',
            body,
        )

        id_fetched_or_generated = id

    }else{
        id_fetched_or_generated = uuidv4()
    }

    const { data } = await api.get(
        `items/${item_id}/`
        )

    const data_dispatch = {
        id: id_fetched_or_generated,
        item_id: data,
    }

    dispatch({ 
        type: CART_ADD_ITEM, 
        payload: data_dispatch })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const addListToCart = (item_id_list) => async (dispatch, getState) => {

    let body = []
    item_id_list.map(x => {
            body.push({item_id: x}) 
        })

    await api.post(
            'cart/cart-item/add/',
            body,
        )

    dispatch({ 
        type: CART_ADD_LIST_ITEM, 
        })

    // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    
    const { userInfo } = getState().userLogin

    if (userInfo){
        await api.delete(
        `cart/cart-item/remove/${id}`)
    }

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}




