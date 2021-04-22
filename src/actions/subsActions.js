import api from "../api";
import {
    SUBSCRIBE,
} from '../constants/subsConstants'

export const subscribe = (id, type) => async (dispatch, getState) => {
    const {
        userLogin: { userInfo },
    } = getState()

    const body = {
        user_id: id, subscription_type: type,
    }

    const { data } = await api.post(
        'order/subscribe/',
        body,
        )

    dispatch({ 
        type: SUBSCRIBE, 
        payload: data })

    localStorage.setItem('subscription', JSON.stringify(getState().subscription))
}


// export const removeFromCart = (id) => async (dispatch, getState) => {
    
//     const { data } = await api.delete(
//         `cart/remove/${id}`)

//     dispatch({
//     type: CART_REMOVE_ITEM,
//     payload: id,
//     })


//     localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
// }

