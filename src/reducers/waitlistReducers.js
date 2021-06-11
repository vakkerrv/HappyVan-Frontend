import {
    WAITLIST_REQUEST,
    WAITLIST_SUCCESS,
    WAITLIST_FAIL,
    WAITLIST_ADD_ITEM,
    WAITLIST_REMOVE_ITEM,

    WAITLIST_ADD_ITEM_REQUEST,
    WAITLIST_ADD_ITEM_SUCCESS,
    WAITLIST_ADD_ITEM_FAIL,

} from '../constants/waitlistConstants'


export const waitlistReducer = (state = { waitlistItems: []}, action) => {
	switch (action.type){
		case WAITLIST_REQUEST:
			return { loading: true, waitlistItems: [] }

		case WAITLIST_SUCCESS:
			return { 
				loading: false, 
				waitlistItems: action.payload,
			}

		case WAITLIST_FAIL:
			return { loading: false, waitlistItems: [], error: action.payload }

		case WAITLIST_REMOVE_ITEM:
			return { 
				...state,
				waitlistItems: state.waitlistItems.filter(x => x.id !== action.payload)
			}

		default:
			return state
	}
}



export const waitlistAddItemReducer = (state = { }, action) => {
	switch (action.type){
		case WAITLIST_ADD_ITEM_REQUEST:
			return { loading: true }

		case WAITLIST_ADD_ITEM_SUCCESS:
			return { 
				loading: false, 
				data: action.payload,
			}

		case WAITLIST_ADD_ITEM_FAIL:
			return { 
				loading: false, 
				error: action.payload 
			}

		default:
			return state
	}
}


