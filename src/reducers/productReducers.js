import {
	PRODUCT_DETAIL_REQUEST,
	PRODUCT_DETAIL_SUCCESS,
	PRODUCT_DETAIL_FAIL,
	PRODUCT_DETAIL_RESET,

	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_RESET,

    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,
} from '../constants/productConstants'

export const productListReducer = (state = { }, action) => {
	switch (action.type){
		case PRODUCT_LIST_REQUEST:
			return { loading: true }

		case PRODUCT_LIST_SUCCESS:
			return { 
				loading: false, 
				success: true,
				// products: action.payload,
			}

		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload }

		case PRODUCT_LIST_RESET:
			return {  }

		default:
			return state
	}
}
// export const productListReducer = (state = { products: []}, action) => {
// 	switch (action.type){
// 		case PRODUCT_LIST_REQUEST:
// 			return { loading: true, products: [] }

// 		case PRODUCT_LIST_SUCCESS:
// 			return { 
// 				loading: false, 
// 				success: true,
// 				// products: action.payload,
// 			}

// 		case PRODUCT_LIST_FAIL:
// 			return { loading: false, error: action.payload }

// 		case PRODUCT_LIST_RESET:
// 			return { products: [] }

// 		default:
// 			return state
// 	}
// }



export const productDetailReducer = (state = { product: {} }, action) => {
	switch (action.type){
		case PRODUCT_DETAIL_REQUEST:
			return { loading: true }

		case PRODUCT_DETAIL_SUCCESS:
			return { 
				loading: false, 
				success: true,
			}

		case PRODUCT_DETAIL_FAIL:
			return { loading: false, error: action.payload }

		case PRODUCT_DETAIL_RESET:
			return { product: {} }

		default:
			return state
	}
}

// export const productDetailReducer = (state = { product: {} }, action) => {
// 	switch (action.type){
// 		case PRODUCT_DETAIL_REQUEST:
// 			return { loading: true, ...state }

// 		case PRODUCT_DETAIL_SUCCESS:
// 			return { 
// 				loading: false, 
// 				product: action.payload,
// 			}

// 		case PRODUCT_DETAIL_FAIL:
// 			return { loading: false, error: action.payload }

// 		case PRODUCT_DETAIL_RESET:
// 			return { product: {} }

// 		default:
// 			return state
// 	}
// }


export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }

        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true, }

        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_CREATE_REVIEW_RESET:
            return {}

        default:
            return state
    }
}