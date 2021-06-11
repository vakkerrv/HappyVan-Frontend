import api from "../api";
import {USER_LOGIN_REQUEST, 
		USER_LOGIN_SUCCESS,
		USER_LOGIN_FAIL,
		USER_LOGOUT,

		USER_REGISTER_REQUEST, 
		USER_REGISTER_SUCCESS,
		USER_REGISTER_FAIL,

		USER_UPDATE_REQUEST,
		USER_UPDATE_SUCCESS,
		USER_UPDATE_FAIL,

		USER_ADD_ADDRESS_REQUEST,
		USER_ADD_ADDRESS_SUCCESS,
		USER_ADD_ADDRESS_FAIL,

		USER_GET_ADDRESS_REQUEST,
		USER_GET_ADDRESS_SUCCESS,
		USER_GET_ADDRESS_FAIL,
		
		USER_UPDATE_ADDRESS_REQUEST,
		USER_UPDATE_ADDRESS_SUCCESS,
		USER_UPDATE_ADDRESS_FAIL,

		PASSWORD_RESET_REQUEST,
		PASSWORD_RESET_SUCCESS,
		PASSWORD_RESET_FAIL,
		PASSWORD_RESET_CONFIRM_REQUEST,
		PASSWORD_RESET_CONFIRM_SUCCESS,
		PASSWORD_RESET_CONFIRM_FAIL,

		SET_PASSWORD_REQUEST,
		SET_PASSWORD_SUCCESS,
		SET_PASSWORD_FAIL,

	} from '../constants/userConstants';

import { getSubscriptionDetail } from './subsActions'
import { fetchBagList } from '../actions/bagActions'
import { fetchCartList, addListToCart } from '../actions/cartActions'
import { fetchWishlist } from '../actions/wishlistActions'

export const login = (email, password) => async(dispatch) => {
	try{
		dispatch({
			type: USER_LOGIN_REQUEST
		})

		const { data } = await api.login(
			{ email: email, password: password },
			)

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		})

		localStorage.setItem('userInfo', JSON.stringify(data))

		dispatch(getSubscriptionDetail())
		dispatch(getAddress())

		dispatch(fetchBagList())
		dispatch(fetchCartList())
		dispatch(fetchWishlist())

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
	localStorage.removeItem('address')
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

        // Save a cart of non-authorized user 
	    const { cartItems } = getState().cart

        Promise.resolve(dispatch(login(output.email, output.password))).then(function (response) {
          	dispatch(addListToCart(cartItems.map(x => x.item_id.id))); //dispatch
            return response;
        })

	}catch(error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}
}


export const resetPassword = (email) => async(dispatch) => {
	try{
		dispatch({
			type: PASSWORD_RESET_REQUEST
		})

		await api.post(
			'accounts/auth/users/reset_password/',
			{email: email}
			)

		dispatch({
			type: PASSWORD_RESET_SUCCESS,
		})

	}catch(error) {
		dispatch({
			type: PASSWORD_RESET_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}
}


export const resetPasswordConfirm = (uid, token, newPassword, reNewPassword) => async(dispatch) => {
	try{
		dispatch({
			type: PASSWORD_RESET_CONFIRM_REQUEST
		})

		const body = { 
			uid: uid, 
			token: token, 
			new_password: newPassword, 
			re_new_password: reNewPassword,
		}

		await api.post(
			'accounts/auth/users/reset_password_confirm/',
			body
			)

		dispatch({
			type: PASSWORD_RESET_CONFIRM_SUCCESS,
		})

	}catch(error) {
		dispatch({
			type: PASSWORD_RESET_CONFIRM_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}
}


export const setPassword = (newPassword, reNewPassword, currentPassword) => async(dispatch) => {
	try{
		dispatch({
			type: SET_PASSWORD_REQUEST
		})

		const body = { 
			new_password: newPassword, 
			re_new_password: reNewPassword,
			current_password: currentPassword,
		}

		await api.post(
			'accounts/auth/users/set_password/',
			body
			)

		dispatch({
			type: SET_PASSWORD_SUCCESS,
		})

	}catch(error) {
		dispatch({
			type: SET_PASSWORD_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}
}


export const updatePersonalInfo = (updatedInfo, id) => async(dispatch) => {
	try{
		dispatch({
			type: USER_UPDATE_REQUEST,
		})

		const body = {
	    	'email': updatedInfo.email,
	    	'first_name': updatedInfo.first_name,
	    	'last_name': updatedInfo.last_name,
	    	'email': updatedInfo.email,
	    	'user_ext': {
	        	'phone': updatedInfo.phone,       		
	    	}
		}

		const { data } = await api.put(
			`accounts/profile/update/${id}/`, 
			body,
			)

		dispatch({
			type: USER_UPDATE_SUCCESS,
			payload: data,
		})

		const newUserInfo = Object.assign(JSON.parse(localStorage.getItem('userInfo')), data)
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: newUserInfo,
		})
		localStorage.setItem('userInfo', JSON.stringify(newUserInfo))

	} catch(error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
	}
}



export const addAddress = (address) => async(dispatch) => {
	try{
		dispatch({
			type: USER_ADD_ADDRESS_REQUEST,
		})

		const { data } = await api.post(
			'accounts/address/add/', 
			address,
			)

		dispatch(getAddress())
		dispatch({
			type: USER_ADD_ADDRESS_SUCCESS,
			payload: data,
		})

		// localStorage.setItem('address', JSON.stringify(data))

	}catch(error) {
		dispatch({
			type: USER_ADD_ADDRESS_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}
}


export const getAddress = () => async(dispatch) => {
	try{
		dispatch({
			type: USER_GET_ADDRESS_REQUEST,
		})

		const { data } = await api.get(
			'accounts/address/get/', 
			)

		dispatch({
			type: USER_GET_ADDRESS_SUCCESS,
			payload: data,
		})

		localStorage.setItem('address', JSON.stringify(data))

	}catch(error) {
		dispatch({
			type: USER_GET_ADDRESS_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}

}

export const updateAddress = (address, address_id) => async(dispatch) => {
	try{
		dispatch({
			type: USER_UPDATE_ADDRESS_REQUEST,
		})


		const { data } = await api.put(
			`accounts/address/update/${address_id}/`, 
			address,
			)

		dispatch(getAddress())

		dispatch({
			type: USER_UPDATE_ADDRESS_SUCCESS,
			payload: data,
		})


	}catch(error) {
		dispatch({
			type: USER_UPDATE_ADDRESS_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}
}
