import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    userLoginReducer, 
    userUpdateReducer, 
    getAddressReducer, 
    addAddressReducer, 
    updateAddressReducer,
    userRegisterReducer,
} from './reducers/userReducers'

import {
    productListReducer, productDetailReducer,
} from './reducers/productReducers'

import {
    cartReducer, cartAddItemReducer,
} from './reducers/cartReducers'

import {
    wishlistReducer, wishlistAddItemReducer,
} from './reducers/wishlistReducers'

import {
    orderReducer,
} from './reducers/orderReducers'

import {
    subscribeReducer, subDetailReducer, subUpdateReducer,
} from './reducers/subsReducers'

import {
    bagReducer, bagUpdateReducer,
} from './reducers/bagReducers'

import {
    tokenReducer,
} from './reducers/tokenReducer'

import { USER_LOGOUT } from './constants/userConstants'

const appReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userUpdate: userUpdateReducer,
    address: getAddressReducer,
    addAddress: addAddressReducer,
    updateAddress: updateAddressReducer,

    productList: productListReducer,
    product: productDetailReducer,

    bag: bagReducer,
    bagUpdate: bagUpdateReducer,
    
    cart: cartReducer,
    addCart: cartAddItemReducer,

    wishlist: wishlistReducer,
    addWishlist: wishlistAddItemReducer,

    order: orderReducer,

    subscribe: subscribeReducer,
    subscription: subDetailReducer,
    subscriptionUpdate: subUpdateReducer,

    token: tokenReducer,
})

const reducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null
const addressFromStorage = localStorage.getItem('address') ?
    JSON.parse(localStorage.getItem('address')) : {}
const subInfoFromStorage = localStorage.getItem('subInfo') ?
    JSON.parse(localStorage.getItem('subInfo')) : {}
const wishlistFromStorage = localStorage.getItem('wishlist') ?
    JSON.parse(localStorage.getItem('wishlist')) : []
const cartFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    address: { addressInfo: addressFromStorage},
    subscription: { details: subInfoFromStorage },
    wishlist: { wishlistItems: wishlistFromStorage },
    cart: { cartItems: cartFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
