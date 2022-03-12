import { IProduct } from '../../models/IProduct'
import { ProductResponce } from '../../models/response/productResponce'

export enum ActionType {
  PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST',
  PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS',
  PRODUCT_CREATE_FAIL = 'PRODUCT_CREATE_FAIL',
  PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST',
  PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS',
  PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL',
  PRODUCT_GET_REQUEST = 'PRODUCT_GET_REQUEST',
  PRODUCT_GET_SUCCESS = 'PRODUCT_GET_SUCCESS',
  PRODUCT_GET_FAIL = 'PRODUCT_GET_FAIL',
  PRODUCT_ALL_REQUEST = 'RODUCT_ALL_REQUEST',
  PRODUCT_ALL_SUCCESS = 'PRODUCT_ALL_SUCCESS',
  PRODUCT_ALL_FAIL = 'RODUCT_ALL_FAIL',
}

export type CreateProductRequest = {
  type: ActionType.PRODUCT_CREATE_REQUEST
  payload: IProduct
}

export type CreateProductSuccess = {
  type: ActionType.PRODUCT_CREATE_SUCCESS
  payload: IProduct
}

export type CreateProductFail = {
  type: ActionType.PRODUCT_CREATE_FAIL
  payload: string
}

export type DeleteProductRequest = {
  type: ActionType.PRODUCT_DELETE_REQUEST
  payload: string
}

export type DeleteProductSuccess = {
  type: ActionType.PRODUCT_DELETE_SUCCESS
  payload: string
}

export type DeleteProductFail = {
  type: ActionType.PRODUCT_DELETE_FAIL
  payload: string
}

export type GetProductRequest = {
  type: ActionType.PRODUCT_GET_REQUEST
  payload: string
}

export type GetProductSuccess = {
  type: ActionType.PRODUCT_GET_SUCCESS
  payload: ProductResponce
}

export type GetProductFail = {
  type: ActionType.PRODUCT_GET_FAIL
  payload: string
}

export type AllProductRequest = {
  type: ActionType.PRODUCT_ALL_REQUEST
}

export type AllProductSuccess = {
  type: ActionType.PRODUCT_ALL_SUCCESS
  payload: ProductResponce[]
}

export type AllProductFail = {
  type: ActionType.PRODUCT_ALL_FAIL
  payload: string
}

export type ProductActionTypes =
  | CreateProductRequest
  | CreateProductSuccess
  | CreateProductFail
  | DeleteProductRequest
  | DeleteProductSuccess
  | DeleteProductFail
  | GetProductRequest
  | GetProductSuccess
  | GetProductFail
  | AllProductRequest
  | AllProductSuccess
  | AllProductFail
