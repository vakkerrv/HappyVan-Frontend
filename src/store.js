import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    userLoginReducer, userRegisterReducer,
} from './reducers/userReducers'

import {
    productListReducer, productDetailReducer,
} from './reducers/productReducers'

import {
    cartReducer,
} from './reducers/cartReducers'

import {
    wishlistReducer,
} from './reducers/wishlistReducers'

import {
    orderReducer,
} from './reducers/orderReducers'

import {
    subsReducer,
} from './reducers/subsReducers'

import {
    bagReducer,
} from './reducers/bagReducers'

import { USER_LOGOUT } from './constants/userConstants'

const appReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    productList: productListReducer,
    product: productDetailReducer,

    bag: bagReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,

    order: orderReducer,

    subscription: subsReducer,
})

const reducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null
const subInfoFromStorage = localStorage.getItem('subInfo') ?
    JSON.parse(localStorage.getItem('subInfo')) : null
const wishlistFromStorage = localStorage.getItem('wishlist') ?
    JSON.parse(localStorage.getItem('wishlist')) : []
const cartFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    subscription: { details: subInfoFromStorage },
    wishlist: { wishlistItems: wishlistFromStorage },
    cart: { cartItems: cartFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
