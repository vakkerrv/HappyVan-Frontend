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
    orderReducer,
} from './reducers/orderReducers'

import {
    subsReducer,
} from './reducers/subsReducers'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    productList: productListReducer,
    product: productDetailReducer,

    cart: cartReducer,
    order: orderReducer,

    subscription: subsReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store