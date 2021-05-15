import api from "../api";
import {
    BAG_LIST_REQUEST,
    BAG_LIST_SUCCESS,
    BAG_LIST_FAIL,
    BAG_ITEM_UPDATE,

    BAG_ITEM_UPDATE_REQUEST,
    BAG_ITEM_UPDATE_SUCCESS,
    BAG_ITEM_UPDATE_FAIL,

} from '../constants/bagConstants'

export const fetchBagList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: BAG_LIST_REQUEST })

        const { data } = await api.get(
            `bag/`,)

        dispatch({
            type: BAG_LIST_SUCCESS,
            payload: data
        })

        localStorage.setItem('bagItems', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: BAG_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const returnItem = (id, returnStatus) => async (dispatch, getState) => {
    try {
        dispatch({ type: BAG_ITEM_UPDATE_REQUEST })

        const body = {
            to_return: returnStatus
        }

        const { data } = await api.put(
            `bag/bag-item/update/${id}/`,
            body,
            )

        dispatch({ 
            type: BAG_ITEM_UPDATE_SUCCESS, 
            payload: data,
        })

        dispatch({ 
            type: BAG_ITEM_UPDATE,
            payload: data,
        })

        // dispatch(fetchBagList())
    } catch (error) {
        dispatch({
            type: BAG_ITEM_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}
