import { takeLatest, all, put, call } from 'redux-saga/effects'

import { ActionType } from './authTypes'
import {
  registrationFail,
  registrationSuccess,
  loginSuccess,
  loginFail,
  logOutSuccess,
  logOutFail,
  checkAuthFail,
  checkAuthSuccess,
} from './authAction'
import { IAuth } from '../../models/IUser'
import AuthService from '../../services/authService'

export function* registration({
  payload,
}: {
  payload: IAuth
  type: string
}): Generator {
  const { email, password } = payload
  // type RegistrationResponse = SagaReturnType<typeof AuthService.registration>
  try {
    console.log(email)
    const response: any = yield call(AuthService.registration, email, password)
    console.log(response)
    yield put(registrationSuccess(response?.data?.user))
    localStorage.setItem('token', response?.data?.accessToken)
  } catch (error: any) {
    console.log(error.response?.data?.message)
    yield put(registrationFail(error.response?.data?.message))
  }
}

export function* login({
  payload,
}: {
  payload: IAuth
  type: string
}): Generator {
  const { email, password } = payload
  // type RegistrationResponse = SagaReturnType<typeof AuthService.registration>
  try {
    console.log(email)
    const response: any = yield call(AuthService.login, email, password)
    console.log(response)
    yield put(loginSuccess(response?.data?.user))
    localStorage.setItem('token', response?.data?.accessToken)
  } catch (error: any) {
    console.log(error.response?.data?.message)
    yield put(loginFail(error.response?.data?.message))
  }
}

export function* logout(): Generator {
  // type RegistrationResponse = SagaReturnType<typeof AuthService.registration>
  try {
    const response: any = yield call(AuthService.logout)
    console.log(response)
    yield put(logOutSuccess())
    localStorage.removeItem('token')
  } catch (error: any) {
    console.log(error.response?.data?.message)
    yield put(logOutFail(error.response?.data?.message))
  }
}

export function* checkAuth(): Generator {
  // type RegistrationResponse = SagaReturnType<typeof AuthService.registration>
  try {
    const response: any = yield call(AuthService.checkAuth)
    console.log(response)
    yield put(checkAuthSuccess(response?.data?.user))
    localStorage.setItem('token', response?.data?.accessToken)
  } catch (error: any) {
    console.log(error.response?.data?.message)
    yield put(checkAuthFail(error.response?.data?.message))
  }
}

export function* registerWatcher() {
  yield takeLatest(ActionType.USER_REGISTRATION_REQUEST, registration)
}
export function* loginWatcher() {
  yield takeLatest(ActionType.USER_LOGIN_REQUEST, login)
}
export function* logoutWatcher() {
  yield takeLatest(ActionType.USER_LOGOUT_REQUEST, logout)
}
export function* checkAuthWatcher() {
  yield takeLatest(ActionType.USER_CHECKAUTH_REQUEST, checkAuth)
}

export function* authSaga() {
  yield all([
    call(registerWatcher),
    call(loginWatcher),
    call(logoutWatcher),
    call(checkAuthWatcher),
  ])
}
