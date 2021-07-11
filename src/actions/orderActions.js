import api from "../api";
import {
    // ORDER_LIST_REQUEST,
    // ORDER_LIST_SUCCESS,
    // ORDER_LIST_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
} from '../constants/orderConstants'

// import { fetchCartList } from './cartActions'

// export const fetchOrderList = () => async (dispatch) => {
//     try {
//         dispatch({ type: ORDER_LIST_REQUEST })

//         const { data } = await api.get(
//             `order/`,)

//         dispatch({
//             type: ORDER_LIST_SUCCESS,
//             payload: data
//         })

//     } catch (error) {
//         dispatch({
//             type: ORDER_LIST_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }

export const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST
        })

        const { data } = await api.get(
            `/order/details/${id}`,
        )

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createOrder = (body) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST })

        const { data } = await api.post(
            `order/create/`,
            body,)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
    
}


export const payOrder = (body) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_PAY_REQUEST
        })

        const { data } = await api.post(
            `/order/pay/`,
            body,
        )

        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}