import { IProduct } from '../../models/IProduct'
import { ProductResponce } from '../../models/response/productResponce'
import {
  ActionType,
  CreateProductRequest,
  CreateProductSuccess,
  CreateProductFail,
  DeleteProductFail,
  DeleteProductSuccess,
  DeleteProductRequest,
  GetProductSuccess,
  GetProductRequest,
  GetProductFail,
  AllProductRequest,
  AllProductSuccess,
  AllProductFail,
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

export const deleteProductRequest = (
  payload: string
): DeleteProductRequest => ({
  type: ActionType.PRODUCT_DELETE_REQUEST,
  payload,
})

export const deleteProductSuccess = (
  payload: string
): DeleteProductSuccess => ({
  type: ActionType.PRODUCT_DELETE_SUCCESS,
  payload,
})

export const deleteProductFail = (payload: string): DeleteProductFail => ({
  type: ActionType.PRODUCT_DELETE_FAIL,
  payload,
})

export const getProductRequest = (payload: string): GetProductRequest => ({
  type: ActionType.PRODUCT_GET_REQUEST,
  payload,
})

export const getProductSuccess = (
  payload: ProductResponce
): GetProductSuccess => ({
  type: ActionType.PRODUCT_GET_SUCCESS,
  payload,
})

export const getProductFail = (payload: string): GetProductFail => ({
  type: ActionType.PRODUCT_GET_FAIL,
  payload,
})

export const allProductRequest = (): AllProductRequest => ({
  type: ActionType.PRODUCT_ALL_REQUEST,
})

export const allProductSuccess = (
  payload: ProductResponce[]
): AllProductSuccess => ({
  type: ActionType.PRODUCT_ALL_SUCCESS,
  payload,
})

export const allProductFail = (payload: string): AllProductFail => ({
  type: ActionType.PRODUCT_ALL_FAIL,
  payload,
})
