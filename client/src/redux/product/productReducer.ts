import { ProductResponce } from '../../models/response/productResponce'
import { ActionType, ProductActionTypes } from './productTypes'

export interface ProductState {
  loading: boolean
  error: null | string
  products: ProductResponce[]
  product: ProductResponce | null
}

const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
  product: null,
}

const productReducer = (state = initialState, action: ProductActionTypes) => {
  switch (action.type) {
    case ActionType.PRODUCT_CREATE_REQUEST:
      return { ...state, loading: true, error: null }
    case ActionType.PRODUCT_CREATE_SUCCESS:
      return { products: [...state.products, action.payload] }
    case ActionType.PRODUCT_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default productReducer
