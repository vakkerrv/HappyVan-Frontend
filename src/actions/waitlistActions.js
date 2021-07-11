import api from "../api";
// import { v4 as uuidv4 } from 'uuid';

import {
    // WAITLIST_REQUEST,
    // WAITLIST_SUCCESS,
    // WAITLIST_FAIL,
    // WAITLIST_ADD_ITEM,
    WAITLIST_REMOVE_ITEM,

    WAITLIST_ADD_ITEM_REQUEST,
    WAITLIST_ADD_ITEM_SUCCESS,
    WAITLIST_ADD_ITEM_FAIL,

} from '../constants/waitlistConstants'

// export const fetchWaithlist = () => async (dispatch, getState) => {
//     try {

//         dispatch({ type: WISHLIST_REQUEST })

//         const { data } = await api.get(
//             `wishlist/`,)

//         dispatch({
//             type: WISHLIST_SUCCESS,
//             payload: data
//         })

//         localStorage.setItem('wishlist', JSON.stringify(getState().wishlist.wishlistItems))

//     } catch (error) {
//         dispatch({
//             type: WISHLIST_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }


export const addToWaitlist = (item_id) => async (dispatch, getState) => {

    try{
        dispatch({ type: WAITLIST_ADD_ITEM_REQUEST })

        const currentList = getState().waitlist.waitlistItems
        const existItem = currentList.find(x => x.item_id.id === item_id)

        // let data_dispatch = { item_id: {id: item_id} }
        // let id_generated

        if (!existItem) {

            const body = {
                item_id: item_id, 
            }

            const { data } = await api.post(
                'waitlist/wait-item/add/',
                body,
            )

            dispatch({ 
                type: WAITLIST_ADD_ITEM_SUCCESS, 
                payload: data,
            })

            // dispatch(fetchWishlist())

        }

    }catch(error){
        dispatch({
            type: WAITLIST_ADD_ITEM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const removeFromWaitlist = (id) => async (dispatch, getState) => {
    
    const { userInfo } = getState().userLogin

    if (userInfo){
        await api.delete(
            `waitlist/wait-item/remove/${id}`)
    }

    dispatch({
        type: WAITLIST_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('waitlist', JSON.stringify(getState().waitlist.waitlistItems))
}




