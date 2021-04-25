import {
	BAG_LIST_REQUEST,
	BAG_LIST_SUCCESS,
	BAG_LIST_FAIL,
	BAG_ITEM_RETURN,

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


		// case BAG_ITEM_RETURN:
  //           const item = action.payload
  //           console.log('item', item)
  //           console.log('state.bagItems', state.bagItems)

		// 	return { 
  //   			...state,
  //   			bagItems: state.bagItems.map(x => x.bag_item_id === item.bag_item_id ? item : x)
		// 	}

		default:
			return state
	}
}
