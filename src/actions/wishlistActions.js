import api from "../api";
import { v4 as uuidv4 } from 'uuid';

import {
    WISHLIST_REQUEST,
    WISHLIST_SUCCESS,
    WISHLIST_FAIL,
    WISHLIST_ADD_ITEM,
    WISHLIST_REMOVE_ITEM,
    UNAUT_WISHLIST,

} from '../constants/wishlistConstants'

export const fetchWishlist = () => async (dispatch, getState) => {
    try {

        dispatch({ type: WISHLIST_REQUEST })

        const { data } = await api.get(
            `wishlist/`,)

        dispatch({
            type: WISHLIST_SUCCESS,
            payload: data
        })

        localStorage.setItem('wishlist', JSON.stringify(getState().wishlist.wishlistItems))

    } catch (error) {
        dispatch({
            type: WISHLIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const addToWishlist = (item_id) => async (dispatch, getState) => {

    const { userInfo } = getState().userLogin

    const currentList = getState().wishlist.wishlistItems
    const existItem = currentList.find(x => x.item_id.id === item_id)

    let data_dispatch = { item_id: {id: item_id} }
    let id_generated

    if (!existItem) {

        if (userInfo){
            const body = {
                item_id: item_id, 
            }

            const { data: {id} } = await api.post(
                'wishlist/wish-item/add/',
                body,
            )

            id_generated = id

        }else{
            id_generated = uuidv4()
        }

        const { data } = await api.get(
            `items/${item_id}/`
            )

        data_dispatch = {
            id: id_generated,
            item_id: data
        }
    } 

    dispatch({ 
        type: WISHLIST_ADD_ITEM, 
        payload: data_dispatch })

    localStorage.setItem('wishlist', JSON.stringify(getState().wishlist.wishlistItems))
}


export const removeFromWishlist = (id) => async (dispatch, getState) => {
    
    const { userInfo } = getState().userLogin

    if (userInfo){
        await api.delete(
            `wishlist/wish-item/remove/${id}`)
    }

    dispatch({
        type: WISHLIST_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('wishlist', JSON.stringify(getState().wishlist.wishlistItems))
}




