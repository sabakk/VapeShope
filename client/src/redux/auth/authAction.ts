import { IAuth, IUser } from '../../models/IUser'
import {
  ActionType,
  RegistrationRequest,
  RegistrationSuccess,
  RegistrationFail,
  LoginRequest,
  LoginSuccess,
  LoginFail,
  LogOutRequest,
  LogOutSuccess,
  LogOutFail,
  CheckAuthRequest,
  CheckAuthSuccess,
  CheckAuthFail,
} from './authTypes'

export const registrationRequest = (payload: IAuth): RegistrationRequest => ({
  type: ActionType.USER_REGISTRATION_REQUEST,
  payload,
})

export const registrationSuccess = (payload: IUser): RegistrationSuccess => ({
  type: ActionType.USER_REGISTRATION_SUCCESS,
  payload,
})

export const registrationFail = (payload: string): RegistrationFail => ({
  type: ActionType.USER_REGISTRATION_FAIL,
  payload,
})

export const loginRequest = (payload: IAuth): LoginRequest => ({
  type: ActionType.USER_LOGIN_REQUEST,
  payload,
})
export const loginSuccess = (payload: IUser): LoginSuccess => ({
  type: ActionType.USER_LOGIN_SUCCESS,
  payload,
})

export const loginFail = (payload: string): LoginFail => ({
  type: ActionType.USER_LOGIN_FAIL,
  payload,
})

export const logOutRequest = (): LogOutRequest => ({
  type: ActionType.USER_LOGOUT_REQUEST,
})
export const logOutSuccess = (): LogOutSuccess => ({
  type: ActionType.USER_LOGOUT_SUCCESS,
})
export const logOutFail = (payload: string): LogOutFail => ({
  type: ActionType.USER_LOGOUT_FAIL,
  payload,
})

export const checkAuthRequest = (): CheckAuthRequest => ({
  type: ActionType.USER_CHECKAUTH_REQUEST,
})
export const checkAuthSuccess = (payload: IUser): CheckAuthSuccess => ({
  type: ActionType.USER_CHECKAUTH_SUCCESS,
  payload,
})
export const checkAuthFail = (payload: string): CheckAuthFail => ({
  type: ActionType.USER_CHECKAUTH_FAIL,
  payload,
})
