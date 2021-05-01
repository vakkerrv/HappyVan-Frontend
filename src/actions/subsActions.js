import api from "../api";
import {
    SUBSCRIBE,
    UNSUBSCRIBE,
    SUBSCRIPTION_DETAIL_REQUEST,
    SUBSCRIPTION_DETAIL_SUCCESS,
    SUBSCRIPTION_DETAIL_FAIL,

} from '../constants/subsConstants'

export const subscribe = (type) => async (dispatch, getState) => {
    const body = {
        sub_plan_id: type,
    }

    const { data } = await api.post(
        'sub/subscribe/',
        body,
        )

    dispatch({ 
        type: SUBSCRIBE, 
        payload: data })

    dispatch(getSubscriptionDetail())

    localStorage.setItem('subInfo', JSON.stringify(getState().subscription.details))
}



export const getSubscriptionDetail = (sub_id) => async (dispatch) => {
    try {
        dispatch({ type: SUBSCRIPTION_DETAIL_REQUEST })

        const { data } = await api.get(`/sub/sub-details/`)

        dispatch({
            type: SUBSCRIPTION_DETAIL_SUCCESS,
            payload: data
        })

        localStorage.setItem('subInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: SUBSCRIPTION_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const unsubscribe = (id) => async (dispatch, getState) => {
    
    await api.delete(`sub/unsubscribe/${id}`)

    dispatch({
        type: UNSUBSCRIBE,
    })

    localStorage.removeItem('subInfo')
}

