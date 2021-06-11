// import axios from 'axios'
import api from "../api";
import {
    // PRODUCT_DETAIL_REQUEST,
    // PRODUCT_DETAIL_SUCCESS,
    // PRODUCT_DETAIL_FAIL,

    // PRODUCT_LIST_REQUEST,
    // PRODUCT_LIST_SUCCESS,
    // PRODUCT_LIST_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,
} from '../constants/productConstants'


export const createProductReview = (id, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_REQUEST
        })

        const { data } = await axios.post(
            `/api/products/${id}/reviews/`,
            review,
            config
        )
        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


// export const listProducts = () => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_LIST_REQUEST })

//         const { data } = await api.get(`/items/`)

//         dispatch({
//             type: PRODUCT_LIST_SUCCESS,
//             payload: data
//         })

//     } catch (error) {
//         dispatch({
//             type: PRODUCT_LIST_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }


// export const detailProduct = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_DETAIL_REQUEST })

//         const { data } = await api.get(`/items/${id}`)

//         dispatch({
//             type: PRODUCT_DETAIL_SUCCESS,
//             payload: data
//         })

//     } catch (error) {
//         dispatch({
//             type: PRODUCT_DETAIL_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }
