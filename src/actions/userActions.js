import api from "../api";
import {USER_LOGIN_REQUEST, 
		USER_LOGIN_SUCCESS,
		USER_LOGIN_FAIL,
		USER_LOGOUT,

		USER_REGISTER_REQUEST, 
		USER_REGISTER_SUCCESS,
		USER_REGISTER_FAIL,} from '../constants/userConstants';


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
}


export const register = (output) => async(dispatch) => {
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

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

	}catch(error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.response && error.response.data.detail
			? error.response.data.detail
			: error.message,
		})
	}
}