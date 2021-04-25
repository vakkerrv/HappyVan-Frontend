import {
	ORDER_LIST_REQUEST,
	ORDER_LIST_SUCCESS,
	ORDER_LIST_FAIL

} from '../constants/orderConstants'


export const orderReducer = (state = { orderItems: []}, action) => {
	switch (action.type){
		case ORDER_LIST_REQUEST:
			return { loading: true, orderItems: [] }

		case ORDER_LIST_SUCCESS:
			return { 
				loading: false, 
				orderItems: action.payload,
			}

		case ORDER_LIST_FAIL:
			return { 
				loading: false, 
				orderItems: [], 
				error: action.payload 
			}


		// case CART_ADD_ITEM:
  //           const item = action.payload
  //           const existItem = state.cartItems.find(x => x.sku === item.product)

  //       	if (existItem){
  //       		return {
  //       			state
  //       			// ...state,
  //       			// cartItems: state.cartItems.map(x => x.product === item.product ? item : x)
  //       		}
  //       	}else{
  //       		return{
  //       			...state,
  //       			cartItems: [...state.cartItems, item]
  //       		}
  //       	}

		// case CART_REMOVE_ITEM:
		// 	// console.log('x.sku', x.sku)
		// 	// console.log('action.payload', action.payload)
		// 	// console.log('state.cartItems', state.cartItems)
		// 	// console.log('state.cartItems new', state.cartItems.filter(x => x.cart_item_id != action.payload))

		// 	return { 
		// 		...state,
		// 		cartItems: state.cartItems.filter(x => x.cart_item_id != action.payload)
		// 	}

		default:
			return state
	}
}


