import api from "../api";
import {
    SUBSCRIBE_REQUEST,
    SUBSCRIBE_SUCCESS, 
    SUBSCRIBE_FAIL,

    UNSUBSCRIBE,
    SUBSCRIPTION_DETAIL_REQUEST,
    SUBSCRIPTION_DETAIL_SUCCESS,
    SUBSCRIPTION_DETAIL_FAIL,

    SUBSCRIPTION_UPDATE_REQUEST,
    SUBSCRIPTION_UPDATE_SUCCESS,
    SUBSCRIPTION_UPDATE_FAIL,

} from '../constants/subsConstants'

export const subscribe = (plan_id, payment_id) => async (dispatch, getState) => {
    try{
        dispatch({type: SUBSCRIBE_REQUEST})

        const body = {
            allowance_option_id: plan_id,
            payment_option_id: payment_id,
        }

        await api.post(
            'sub/subscribe/',
            body,
            )

        dispatch(getSubscriptionDetail())
        dispatch({type: SUBSCRIBE_SUCCESS})

        // localStorage.setItem('subInfo', JSON.stringify(getState().subscription.details))
    }catch(error) {
        dispatch({
            type: SUBSCRIBE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const getSubscriptionDetail = () => async (dispatch) => {
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


export const updateSubscription = (sub_id, plan_id) => async (dispatch) => {
    try {
        dispatch({ type: SUBSCRIPTION_UPDATE_REQUEST })

        const body = {
            sub_plan_id: plan_id,
        }

        const { data } = await api.put(`sub/upgrade/${sub_id}/`, 
            body,
            )

        dispatch(getSubscriptionDetail())
        dispatch({
            type: SUBSCRIPTION_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SUBSCRIPTION_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
