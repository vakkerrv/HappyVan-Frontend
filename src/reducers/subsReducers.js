import {
    SUBSCRIBE,
} from '../constants/subsConstants'


export const subsReducer = (state = { }, action) => {
	switch (action.type){
		case SUBSCRIBE:
			return action.payload

		default:
			return state
	}
}


