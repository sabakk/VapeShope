import { IProduct } from '../../models/IProduct'

export enum ActionType {
  PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST',
  PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS',
  PRODUCT_CREATE_FAIL = 'PRODUCT_CREATE_FAIL',
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

export type ProductActionTypes =
  | CreateProductRequest
  | CreateProductSuccess
  | CreateProductFail
