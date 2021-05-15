import {
    WISHLIST_REQUEST,
    WISHLIST_SUCCESS,
    WISHLIST_FAIL,
    WISHLIST_ADD_ITEM,
    WISHLIST_REMOVE_ITEM,
    UNAUT_WISHLIST,

    WISHLIST_ADD_ITEM_REQUEST,
    WISHLIST_ADD_ITEM_SUCCESS,
    WISHLIST_ADD_ITEM_FAIL,

} from '../constants/wishlistConstants'


export const wishlistReducer = (state = { wishlistItems: []}, action) => {
	switch (action.type){
		case WISHLIST_REQUEST:
			return { loading: true, wishlistItems: [] }

		case WISHLIST_SUCCESS:
			return { 
				loading: false, 
				wishlistItems: action.payload,
			}

		case WISHLIST_FAIL:
			return { loading: false, wishlistItems: [], error: action.payload }

		// case UNAUT_WISHLIST:
		// 	return { 
		// 		loading: false, 
		// 		wishlistItems: action.payload,
		// 	}

		// case WISHLIST_ADD_ITEM:
  //           const item = action.payload
  //           const existItem = state.wishlistItems.find(x => x.item_id.id === item.item_id.id)

  //       	if (existItem){
  //       		return state
  //       	}else{
  //       		return{
  //       			...state,
  //       			wishlistItems: [...state.wishlistItems, item]
  //       		}
  //       	}

		case WISHLIST_REMOVE_ITEM:
			return { 
				...state,
				wishlistItems: state.wishlistItems.filter(x => x.id !== action.payload)
			}

		default:
			return state
	}
}



export const wishlistAddItemReducer = (state = { }, action) => {
	switch (action.type){
		case WISHLIST_ADD_ITEM_REQUEST:
			return { loading: true }

		case WISHLIST_ADD_ITEM_SUCCESS:
			return { 
				loading: false, 
				data: action.payload,
			}

		case WISHLIST_ADD_ITEM_FAIL:
			return { 
				loading: false, 
				error: action.payload 
			}

		default:
			return state
	}
}


