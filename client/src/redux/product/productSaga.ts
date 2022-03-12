import { takeLatest, all, put, call } from 'redux-saga/effects'

import { ActionType } from './productTypes'
import {
  createProductSuccess,
  createProductFail,
  deleteProductSuccess,
  deleteProductFail,
  allProductSuccess,
  allProductFail,
} from './productAction'
import ProductService from '../../api/productService'
import { IProduct } from '../../models/IProduct'
// import { ProductResponce } from '../../models/response/productResponce'

export function* createProduct({
  payload,
}: {
  payload: IProduct
  type: string
}): Generator {
  const { text, price } = payload
  // type RegistrationResponse = SagaReturnType<typeof AuthService.registration>
  try {
    const response: any = yield call(ProductService.create, text, price)
    yield put(createProductSuccess(response?.data))
  } catch (error: any) {
    yield put(createProductFail(error.response?.data?.message))
  }
}

export function* deleteProduct({
  payload,
}: {
  payload: string
  type: string
}): Generator {
  // const { id } = payload
  // type RegistrationResponse = SagaReturnType<typeof AuthService.registration>
  try {
    yield call(ProductService.deleteProduct, payload)
    yield put(deleteProductSuccess(payload))
  } catch (error: any) {
    yield put(deleteProductFail(error.response?.data?.message))
  }
}

export function* getProduct({
  payload,
}: {
  payload: string
  type: string
}): Generator {
  // type RegistrationResponse = SagaReturnType<typeof AuthService.registration>
  try {
    const response: any = yield call(ProductService.getProduct, payload)
    yield put(createProductSuccess(response?.data))
  } catch (error: any) {
    yield put(createProductFail(error.response?.data?.message))
  }
}

export function* allProduct(): Generator {
  // type RegistrationResponse = SagaReturnType<typeof AuthService.registration>
  try {
    const response: any = yield call(ProductService.getPropucts)
    yield put(allProductSuccess(response?.data))
  } catch (error: any) {
    yield put(allProductFail(error.response?.data?.message))
  }
}

export function* createProductWatcher() {
  yield takeLatest(ActionType.PRODUCT_CREATE_REQUEST, createProduct)
}
export function* deleteProductWatcher() {
  yield takeLatest(ActionType.PRODUCT_DELETE_REQUEST, deleteProduct)
}
export function* getProductWatcher() {
  yield takeLatest(ActionType.PRODUCT_GET_REQUEST, getProduct)
}
export function* allProductWatcher() {
  yield takeLatest(ActionType.PRODUCT_ALL_REQUEST, allProduct)
}

export function* productSaga() {
  yield all([
    call(createProductWatcher),
    call(deleteProductWatcher),
    call(getProductWatcher),
    call(allProductWatcher),
  ])
}
