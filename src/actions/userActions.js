import api from "../api";
import {USER_LOGIN_REQUEST, 
		USER_LOGIN_SUCCESS,
		USER_LOGIN_FAIL,
		USER_LOGOUT,

		USER_REGISTER_REQUEST, 
		USER_REGISTER_SUCCESS,
		USER_REGISTER_FAIL,

		USER_ADD_ADDRESS_SUCCESS,
		USER_ADD_ADDRESS_FAIL,
	} from '../constants/userConstants';

import { getSubscriptionDetail } from './subsActions'
import { addListToCart } from '../actions/cartActions'

export const login = (username, password) => async(dispatch) => {
	try{
		dispatch({
			type: USER_LOGIN_REQUEST
		})

		const { data } = await api.login(
			{ username: username, password: password },
			)

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		})

		localStorage.setItem('userInfo', JSON.stringify(data))

		dispatch(getSubscriptionDetail())

	}catch(error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}
}


export const logout = () => (dispatch) => {
	dispatch({
		type: USER_LOGOUT
	})

	localStorage.removeItem('userInfo')
	localStorage.removeItem('cartItems')
	localStorage.removeItem('subInfo')
	localStorage.removeItem('wishlist')
}


export const register = (output) => async(dispatch, getState) => {
	try{
		dispatch({
			type: USER_REGISTER_REQUEST
		})

		const { data } = await api.signup(
			output,
			)

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		})

        dispatch(login(output.username, output.password))

        // Save a cart of non-authorized user 
	    const { cartItems } = getState().cart
        dispatch(addListToCart(cartItems.map(x => x.item_id.id)))

	}catch(error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}
}


export const addAddress = (address) => async(dispatch) => {
	try{
		const { data } = await api.post(
			'accounts/address/add/', 
			address,
			)

		dispatch({
			type: USER_ADD_ADDRESS_SUCCESS,
			payload: data,
		})

	}catch(error) {
		dispatch({
			type: USER_ADD_ADDRESS_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}
}