import { takeLatest, all, put, call } from 'redux-saga/effects'

import { ActionType } from './productTypes'
import { createProductSuccess, createProductFail } from './productAction'
import ProductService from '../../api/productService'
import { IProduct } from '../../models/IProduct'

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

export function* createProductWatcher() {
  yield takeLatest(ActionType.PRODUCT_CREATE_REQUEST, createProduct)
}

export function* productSaga() {
  yield all([call(createProductWatcher)])
}
