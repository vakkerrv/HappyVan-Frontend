import api from "../api";
import { v4 as uuidv4 } from 'uuid';

import {
    CART_ADD_ITEM_REQUEST,
    CART_ADD_ITEM_SUCCESS,
    CART_ADD_ITEM_FAIL,

    CART_ADD_LIST_ITEM_REQUEST,
    CART_ADD_LIST_ITEM_SUCCESS,
    CART_ADD_LIST_ITEM_FAIL,

    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL,
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,

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

    try{
        const { userInfo } = getState().userLogin

        // let data_dispatch = { item_id: {id: item_id} }
        // let id_fetched_or_generated

        if (userInfo){

            dispatch({ type: CART_ADD_ITEM_REQUEST })

            const body = {
                item_id: item_id, 
            }

            const { data } = await api.post(
                'cart/cart-item/add/',
                body,
            )

            dispatch({ 
                type: CART_ADD_ITEM_SUCCESS, 
                payload: data,
            })

            dispatch(fetchCartList())
            // id_fetched_or_generated = id

        }else{
            const id_generated = uuidv4()
            // id_fetched_or_generated = uuidv4()
    
            const { data: item_details } = await api.get(
                `items/${item_id}/`
                )

            const data_dispatch = {
                id: id_generated,
                item_id: item_details,
            }

            dispatch({ 
                type: CART_ADD_ITEM, 
                payload: data_dispatch })

            localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
        }

    }catch (error){
        dispatch({
            type: CART_ADD_ITEM_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
    
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    
    const { userInfo } = getState().userLogin

    if (userInfo){
        await api.delete(
        `cart/cart-item/remove/${id}/`)
    }

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const addListToCart = (item_id_list) => async (dispatch, getState) => {

    try{
        dispatch({type: CART_ADD_LIST_ITEM_REQUEST})

        let body = []
        item_id_list.map(x => {
                body.push({item_id: x}) 
            })

        await api.post(
                'cart/cart-item/add/',
                body,
            )

        dispatch({ 
            type: CART_ADD_LIST_ITEM_SUCCESS, 
            })

    }catch(error){
        dispatch({
            type: CART_ADD_LIST_ITEM_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}





