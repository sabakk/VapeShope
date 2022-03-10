import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import productReducer from './product/productReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
