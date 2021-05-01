import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,

	CART_LIST_REQUEST,
	CART_LIST_SUCCESS,
	CART_LIST_FAIL

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
            const item = action.payload
            const existItem = state.cartItems.find(x => x.id === item.id)

        	if (existItem){
        		return {
        			state
        			// ...state,
        			// cartItems: state.cartItems.map(x => x.product === item.product ? item : x)
        		}
        	}else{
        		return{
        			state
        			// ...state,
        			// cartItems: [...state.cartItems, item]
        		}
        	}

		case CART_REMOVE_ITEM:
			// console.log('x.sku', x.sku)
			// console.log('action.payload', action.payload)
			// console.log('state.cartItems', state.cartItems)
			// console.log('state.cartItems new', state.cartItems.filter(x => x.cart_item_id != action.payload))

			return { 
				...state,
				cartItems: state.cartItems.filter(x => x.id !== action.payload)
			}

		default:
			return state
	}
}


