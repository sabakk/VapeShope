import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import cartReducer from './cart/cartReducer'
import productReducer from './product/productReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
