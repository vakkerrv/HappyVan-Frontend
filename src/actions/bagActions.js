import api from "../api";
import {
    BAG_LIST_REQUEST,
    BAG_LIST_SUCCESS,
    BAG_LIST_FAIL,
    // BAG_ITEM_RETURN,
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

    } catch (error) {
        dispatch({
            type: BAG_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const returnItem = (id, status) => async (dispatch, getState) => {
    const body = {
        status: status
    }

    await api.put(
        `bag/bag-item/update/${id}/`,
        body,
        )

    dispatch(fetchBagList())
}
