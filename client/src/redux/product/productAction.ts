import { IProduct } from '../../models/IProduct'
import {
  ActionType,
  CreateProductRequest,
  CreateProductSuccess,
  CreateProductFail,
} from './productTypes'

export const createProductRequest = (
  payload: IProduct
): CreateProductRequest => ({
  type: ActionType.PRODUCT_CREATE_REQUEST,
  payload,
})

export const createProductSuccess = (
  payload: IProduct
): CreateProductSuccess => ({
  type: ActionType.PRODUCT_CREATE_SUCCESS,
  payload,
})

export const createProductFail = (payload: string): CreateProductFail => ({
  type: ActionType.PRODUCT_CREATE_FAIL,
  payload,
})
