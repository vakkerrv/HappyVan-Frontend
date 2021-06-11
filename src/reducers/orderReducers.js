import {
	// ORDER_LIST_REQUEST,
	// ORDER_LIST_SUCCESS,
	// ORDER_LIST_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_FAIL,
	ORDER_CREATE_RESET,

    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET,
} from '../constants/orderConstants'


export const orderDetailsReducer = (state = { loading: true, orderItems: []}, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }


        default:
            return state
    }
}


export const orderCreateReducer = (state = { }, action) => {
	switch (action.type){
		case ORDER_CREATE_REQUEST:
			return { loading: true }

		case ORDER_CREATE_SUCCESS:
			return { 
				loading: false, 
				success: true,
                order: action.payload
			}

		case ORDER_CREATE_FAIL:
			return { 
				loading: false, 
				error: action.payload 
			}

        case ORDER_CREATE_RESET:
            return {}
		
		default:
			return state
	}
}


export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PAY_REQUEST:
            return {
                loading: true
            }

        case ORDER_PAY_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case ORDER_PAY_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ORDER_PAY_RESET:
            return {}

        default:
            return state
    }
}




// export const orderReducer = (state = { orderItems: []}, action) => {
// 	switch (action.type){
// 		case ORDER_LIST_REQUEST:
// 			return { loading: true, orderItems: [] }

// 		case ORDER_LIST_SUCCESS:
// 			return { 
// 				loading: false, 
// 				orderItems: action.payload,
// 			}

// 		case ORDER_LIST_FAIL:
// 			return { 
// 				loading: false, 
// 				orderItems: [], 
// 				error: action.payload 
// 			}


// 		// case CART_ADD_ITEM:
//   //           const item = action.payload
//   //           const existItem = state.cartItems.find(x => x.sku === item.product)

//   //       	if (existItem){
//   //       		return {
//   //       			state
//   //       			// ...state,
//   //       			// cartItems: state.cartItems.map(x => x.product === item.product ? item : x)
//   //       		}
//   //       	}else{
//   //       		return{
//   //       			...state,
//   //       			cartItems: [...state.cartItems, item]
//   //       		}
//   //       	}

// 		// case CART_REMOVE_ITEM:
// 		// 	// console.log('x.sku', x.sku)
// 		// 	// console.log('action.payload', action.payload)
// 		// 	// console.log('state.cartItems', state.cartItems)
// 		// 	// console.log('state.cartItems new', state.cartItems.filter(x => x.cart_item_id != action.payload))

// 		// 	return { 
// 		// 		...state,
// 		// 		cartItems: state.cartItems.filter(x => x.cart_item_id != action.payload)
// 		// 	}

// 		default:
// 			return state
// 	}
// }