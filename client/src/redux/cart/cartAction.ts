import { ProductResponce } from '../../models/response/productResponce'
import {
  ActionType,
  CartAddItem,
  CartDeleteItem,
  CartRemoveItem,
  CartToggle,
} from './cartTypes'

export const cartToggle = (): CartToggle => ({
  type: ActionType.TOGGLE_CART,
})

export const сartAddItem = (payload: ProductResponce): CartAddItem => ({
  type: ActionType.ADD_CART,
  payload,
})

export const cartDeleteItem = (payload: ProductResponce): CartDeleteItem => ({
  type: ActionType.DELETE_CART,
  payload,
})

export const cartRemoveItem = (payload: ProductResponce): CartRemoveItem => ({
  type: ActionType.REMOVE_CART,
  payload,
})
