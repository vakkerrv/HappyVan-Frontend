import api from "../api";
import {
    // CART_ADD_ITEM,
    CART_REMOVE_ITEM,

    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL

} from '../constants/cartConstants'

export const fetchCartList = () => async (dispatch) => {
    try {
        dispatch({ type: CART_LIST_REQUEST })

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


export const addToCart = (item_id) => async () => {

    const body = {
        item_id: item_id, 
        status: 'new'
    }

    await api.post(
        'cart/cart-item/add/',
        body,
        )

    // dispatch({ 
    //     type: CART_ADD_ITEM, 
    //     payload: data })

    // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (id) => async (dispatch, getState) => {
    
    await api.delete(
        `cart/cart-item/remove/${id}`)

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}




