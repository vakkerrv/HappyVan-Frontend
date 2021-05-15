import {
    CART_ADD_ITEM_REQUEST,
    CART_ADD_ITEM_SUCCESS,
    CART_ADD_ITEM_FAIL,

	CART_ADD_LIST_ITEM_REQUEST,
	CART_ADD_LIST_ITEM_SUCCESS,
	CART_ADD_LIST_ITEM_FAIL,

	CART_LIST_REQUEST,
	CART_LIST_SUCCESS,
	CART_LIST_FAIL,
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,

} from '../constants/cartConstants'


export const cartReducer = (state = { cartItems: []}, action) => {
	switch (action.type){
		case CART_LIST_REQUEST:
			return { loading: true, cartItems: [] }

		case CART_LIST_SUCCESS:
			return { 
				loading: false, 
				cartItems: action.payload,
			}

		case CART_LIST_FAIL:
			return { loading: false, cartItems: [], error: action.payload }


		case CART_ADD_ITEM:
    		return {
    			...state,
    			cartItems: [...state.cartItems, action.payload]
    		}

		case CART_REMOVE_ITEM:
			return { 
				...state,
				cartItems: state.cartItems.filter(x => x.id !== action.payload)
			}

		default:
			return state
	}
}


export const cartAddListItemsReducer = (state = { }, action) => {
	switch (action.type){
		case CART_ADD_LIST_ITEM_REQUEST:
			return { loading: true }

		case CART_ADD_LIST_ITEM_SUCCESS:
			return { 
				loading: false, 
				success: true,
			}

		case CART_ADD_LIST_ITEM_FAIL:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}


export const cartAddItemReducer = (state = { }, action) => {
	switch (action.type){
		case CART_ADD_ITEM_REQUEST:
    		return {
    			loading: true,
    		}

		case CART_ADD_ITEM_SUCCESS:
    		return {
    			loading: false,
    			data: action.payload,
    		}

		case CART_ADD_ITEM_FAIL:
    		return {
    			loading: false,
    			error: action.payload,
    		}

		default:
			return state
	}
}


