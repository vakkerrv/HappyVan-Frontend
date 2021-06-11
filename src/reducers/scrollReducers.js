import {
	SET_SCROLL_POSITION,
} from '../constants/productConstants'

export const scrollReducer = (state = { }, action) => {
	switch (action.type){
		case SET_SCROLL_POSITION:
			return { 
				scroll: action.payload
			}

		default:
			return state
	}
}