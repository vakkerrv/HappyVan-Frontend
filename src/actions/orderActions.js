import api from "../api";
import {
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL

} from '../constants/orderConstants'

import { fetchCartList } from './cartActions'

export const fetchOrderList = () => async (dispatch) => {
    try {
        dispatch({ type: ORDER_LIST_REQUEST })

        const { data } = await api.get(
            `order/`,)

        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const createOrder = () => async (dispatch, getState) => {

    // await api.post(
    //         `order/new-order/`,
    //         {subscription_id: 1}) 


    // Add new items to the order
    // const {
    //     cart: { cartItems },
    // } = getState()

    // for (let i = 0; i < cartItems.length; i++) {
    //     const item = cartItems[i]

    //     let body = {
    //         order_id: data.order_id,
    //         sku: item.sku.sku,
    //         status: 'new',
    //     } 

        
    //     await api.post(
    //         `order/order-item/add/`,
    //         body)

    //     await api.delete(
    //         `cart/cart-item/remove/${item.cart_item_id}`,
    //         body)
    // }

    // dispatch(fetchOrderList())
    // dispatch(fetchCartList())
    // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

