import {combineReducers} from 'redux'

import productsReducer from './productsReducer'
import cartReducer from './cartReducer'
import checkoutReducer from './checkoutReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    checkoutToken: checkoutReducer,
})

export default rootReducer