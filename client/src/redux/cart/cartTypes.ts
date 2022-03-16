import { ProductResponce } from '../../models/response/productResponce'

export enum ActionType {
  TOGGLE_CART = 'TOGGLE_CART',
  ADD_CART = 'ADD_CART',
  DELETE_CART = 'DELETE_CART',
  // CLEAR_CART = 'CLEAR_CART',
  REMOVE_CART = 'REMOVE_CART',
}

export type CartToggle = {
  type: ActionType.TOGGLE_CART
}

export type CartAddItem = {
  type: ActionType.ADD_CART
  payload: ProductResponce
}

export type CartRemoveItem = {
  type: ActionType.REMOVE_CART
  payload: ProductResponce
}

export type CartDeleteItem = {
  type: ActionType.DELETE_CART
  payload: ProductResponce
}

export type CartAction =
  | CartToggle
  | CartAddItem
  | CartDeleteItem
  | CartRemoveItem
