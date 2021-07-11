import React, { } from 'react';
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

		USER_CHECK_INFO_REQUEST,
		USER_CHECK_INFO_SUCCESS,
		USER_CHECK_INFO_FAIL,

	} from '../constants/userConstants'

export const userCheckInfoReducer = (state={}, action) => {
	switch(action.type){
		case USER_CHECK_INFO_REQUEST:
			return { loading: true }

		case USER_CHECK_INFO_SUCCESS:
			return { loading: false, userShortInfo: action.payload }

		case USER_CHECK_INFO_FAIL:
			return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

		default:
			return state
	}
    
};


export const userRegisterReducer = (state={}, action) => {
	switch(action.type){
		case USER_REGISTER_REQUEST:
			return { loading: true }

		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload }

		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

		default:
			return state
	}
    
};

export const userLoginReducer = (state={}, action) => {
	switch(action.type){
		case USER_LOGIN_REQUEST:
			return { loading: true }

		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: action.payload }

		case USER_LOGIN_FAIL:
			return { loading: false, error: action.payload }

		case USER_LOGOUT:
			return {  }

		default:
			return state
	}   
};


export const userUpdateReducer = (state={}, action) => {
	switch(action.type){

		case USER_UPDATE_REQUEST:
			return {
				loading: true,
			}

        case USER_UPDATE_SUCCESS:
            return { 
            	loading: false, 
            	success: true,
            }

        case USER_UPDATE_FAIL:
            return { 
            	loading: false, 
            	error: action.payload 
            }

		default:
			return state
	}   
};


export const passwordResetReducer = (state={}, action) => {
	switch(action.type){

		case PASSWORD_RESET_REQUEST:
			return {state}

        case PASSWORD_RESET_SUCCESS:
            return { 
            	...state,
            	successReset: true,
            }

        case PASSWORD_RESET_FAIL:
            return { 
            	...state,
            	errorReset: action.payload
            }

		case PASSWORD_RESET_CONFIRM_REQUEST:
			return {state}

        case PASSWORD_RESET_CONFIRM_SUCCESS:
            return { 
				...state,
            	successConfirm: true,
            }

        case PASSWORD_RESET_CONFIRM_FAIL:
            return { 
				...state,
            	errorConfirm: action.payload 
            }


		case SET_PASSWORD_REQUEST:
			return {state}

        case SET_PASSWORD_SUCCESS:
            return { 
				...state,
            	successSet: true,
            }

        case SET_PASSWORD_FAIL:
            return { 
				...state,
            	errorSet: action.payload 
            }

		default:
			return state
	}   
};


export const getAddressReducer = (state={ addressInfo: {} }, action) => {
	switch(action.type){
		
		case USER_GET_ADDRESS_REQUEST:
			return { 
				loading: true,
				addressInfo: {  },
			}

		case USER_GET_ADDRESS_SUCCESS:
			return { 
				loading: false,
				addressInfo: action.payload,
			}		

		case USER_GET_ADDRESS_FAIL:
			return { 
				loading: false,
				addressInfo: {  },
				error: action.payload,
			}

		default:
			return state
	}
    
};

export const addAddressReducer = (state={}, action) => {
	switch(action.type){

		case USER_ADD_ADDRESS_REQUEST:
			return { 
				loading: true,
			}
		
		case USER_ADD_ADDRESS_SUCCESS:
			return { 
				loading: false,
				success: false,
			}

		case USER_ADD_ADDRESS_FAIL:
			return { 
				loading: false,
				error: action.payload 
			}

		default:
			return state
	}
    
};


export const updateAddressReducer = (state={}, action) => {
	switch(action.type){

		case USER_UPDATE_ADDRESS_REQUEST:
			return { 
				loading: true,
			}
		
		case USER_UPDATE_ADDRESS_SUCCESS:
			return { 
				loading: false,
				success: false,
			}

		case USER_UPDATE_ADDRESS_FAIL:
			return { 
				loading: false,
				error: action.payload 
			}

		default:
			return state
	}
    
};