import { ActionType, CartAction } from './cartTypes'
import { ProductResponce } from '../../models/response/productResponce'

export interface CartState {
  hidden: boolean
  cartItems: ProductResponce[]
}

const initialState: CartState = {
  hidden: false,
  cartItems: [],
}

const addItemToCart = (
  cartItems: ProductResponce[],
  cartItemToAdd: ProductResponce
): ProductResponce[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToAdd._id
  )
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === cartItemToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

const removeItemFromCart = (
  cartItems: ProductResponce[],
  cartItemToRemove: ProductResponce
): ProductResponce[] | undefined => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToRemove._id
  )
  if (!existingCartItem) {
    return
  }
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem._id !== cartItemToRemove._id)
  }

  return cartItems.map((cartItem) =>
    cartItem._id === cartItemToRemove._id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case ActionType.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case ActionType.ADD_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case ActionType.DELETE_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }
    case ActionType.REMOVE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      }
    // case ActionType.CLEAR_CART:
    //   return {
    //     ...state,
    //     cartItems: [],
    //   }
    default:
      return state
  }
}

export default cartReducer
