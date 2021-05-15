import {
	BAG_LIST_REQUEST,
	BAG_LIST_SUCCESS,
	BAG_LIST_FAIL,
	BAG_ITEM_UPDATE,

    BAG_ITEM_UPDATE_REQUEST,
    BAG_ITEM_UPDATE_SUCCESS,
    BAG_ITEM_UPDATE_FAIL,

} from '../constants/bagConstants'


export const bagReducer = (state = { bagItems: []}, action) => {
	switch (action.type){
		case BAG_LIST_REQUEST:
			return { loading: true, bagItems: [] }

		case BAG_LIST_SUCCESS:
			return { 
				loading: false, 
				bagItems: action.payload,
			}

		case BAG_LIST_FAIL:
			return { loading: false, bagItems: [], error: action.payload }


		case BAG_ITEM_UPDATE:
            const updated_item = action.payload
            delete updated_item['item_id']

			return { 
    			...state,
    			bagItems: state.bagItems.map(x => x.id === updated_item.id 
    				? Object.assign(x, updated_item) 
    				: x)
			}

		default:
			return state
	}
}


export const bagUpdateReducer = (state = { }, action) => {
	switch (action.type){
		case BAG_ITEM_UPDATE_REQUEST:
			return { loading: true }

		case BAG_ITEM_UPDATE_SUCCESS:
			return { 
				loading: false, 
				data: action.payload,
			}

		case BAG_ITEM_UPDATE_FAIL:
			return { 
				loading: false, 
				error: action.payload 
			}

		default:
			return state
	}
}
