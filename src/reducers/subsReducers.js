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


export const subscribeReducer = (state = { }, action) => {
	switch (action.type){
		case SUBSCRIBE_REQUEST:
			return { loading: true }

		case SUBSCRIBE_SUCCESS:
			return { loading: false, success: true }

		case SUBSCRIBE_FAIL:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}


export const subDetailReducer = (state = { details: {} }, action) => {
	switch (action.type){
		
		case SUBSCRIPTION_DETAIL_REQUEST:
			return { 
				loading: true,
			 	details: {}, 
			}

		case SUBSCRIPTION_DETAIL_SUCCESS:
			return { 
				loading: false, 
				details: action.payload,
			}

		case SUBSCRIPTION_DETAIL_FAIL:
			return { 
				loading: false, 
				details: {}, 
				error: action.payload,
			}

		case UNSUBSCRIBE:
			return { details: {} }

		default:
			return state
	}
}


export const subUpdateReducer = (state = {}, action) => {
	switch (action.type){
		
		case SUBSCRIPTION_UPDATE_REQUEST:
			return { 
				loading: true,
			 	details: {}, 
			}

		case SUBSCRIPTION_UPDATE_SUCCESS:
			return { 
				loading: false, 
				details: action.payload,
			}

		case SUBSCRIPTION_UPDATE_FAIL:
			return { 
				loading: false, 
				details: {}, 
				error: action.payload,
			}

		default:
			return state
	}
}