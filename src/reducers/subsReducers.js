import {
    SUBSCRIBE,
    UNSUBSCRIBE,
    SUBSCRIPTION_DETAIL_REQUEST,
    SUBSCRIPTION_DETAIL_SUCCESS,
    SUBSCRIPTION_DETAIL_FAIL,

} from '../constants/subsConstants'


export const subsReducer = (state = { }, action) => {
	switch (action.type){
		case SUBSCRIBE:
			return { }

		case UNSUBSCRIBE:
			return {  }

		case SUBSCRIPTION_DETAIL_REQUEST:
			return { loading: true, ...state }

		case SUBSCRIPTION_DETAIL_SUCCESS:
			return { 
				loading: false, 
				details: action.payload,
			}

		case SUBSCRIPTION_DETAIL_FAIL:
			return { loading: false, error: action.payload }


		default:
			return state
	}
}


