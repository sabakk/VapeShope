import { all, fork } from 'redux-saga/effects'

import { authSaga } from './auth//authSaga'
import { productSaga } from './product/productSaga'

export function* rootSaga() {
  yield all([fork(authSaga), fork(productSaga)])
}
