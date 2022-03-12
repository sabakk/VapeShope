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
    case ActionType.PRODUCT_DELETE_REQUEST:
      return { ...state, loading: true, error: null }
    case ActionType.PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        product: null,
        products: [
          ...state.products.filter((product) => product._id !== action.payload),
        ],
      }
    case ActionType.PRODUCT_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload }
    case ActionType.PRODUCT_GET_REQUEST:
      return { ...state, loading: true, error: null }
    case ActionType.PRODUCT_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: [...state.products],
        product: action.payload,
      }
    case ActionType.PRODUCT_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [...state.products],
        product: null,
      }
    case ActionType.PRODUCT_ALL_REQUEST:
      return { ...state, loading: true, error: null }
    case ActionType.PRODUCT_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: [...action.payload],
        product: null,
      }
    case ActionType.PRODUCT_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: null,
        product: null,
      }
    default:
      return state
  }
}

export default productReducer
