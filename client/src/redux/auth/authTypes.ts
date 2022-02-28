import { IAuth, IUser } from '../../models/IUser'

export enum ActionType {
  USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST',
  USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS',
  USER_REGISTRATION_FAIL = 'USER_REGISTRATION_FAIL',
  USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL = 'USER_LOGIN_FAIL',
  USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST',
  USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_FAIL = 'USER_LOGOUT_FAIL',
  USER_CHECKAUTH_REQUEST = 'USER_CHECKAUTH_REQUEST',
  USER_CHECKAUTH_SUCCESS = 'USER_CHECKAUTH_SUCCESS',
  USER_CHECKAUTH_FAIL = 'USER_CHECKAUTH_FAIL',
}

export type RegistrationRequest = {
  type: typeof ActionType.USER_REGISTRATION_REQUEST
  payload: IAuth
}

export type RegistrationSuccess = {
  type: typeof ActionType.USER_REGISTRATION_SUCCESS
  payload: IUser
}

export type RegistrationFail = {
  type: typeof ActionType.USER_REGISTRATION_FAIL
  payload: string
}

export type LoginRequest = {
  type: typeof ActionType.USER_LOGIN_REQUEST
  payload: IAuth
}

export type LoginSuccess = {
  type: typeof ActionType.USER_LOGIN_SUCCESS
  payload: IUser
}

export type LoginFail = {
  type: typeof ActionType.USER_LOGIN_FAIL
  payload: string
}

export type LogOutRequest = {
  type: typeof ActionType.USER_LOGOUT_REQUEST
}
export type LogOutSuccess = {
  type: typeof ActionType.USER_LOGOUT_SUCCESS
}
export type LogOutFail = {
  type: typeof ActionType.USER_LOGOUT_FAIL
  payload: string
}

export type CheckAuthRequest = {
  type: typeof ActionType.USER_CHECKAUTH_REQUEST
}

export type CheckAuthSuccess = {
  type: typeof ActionType.USER_CHECKAUTH_SUCCESS
  payload: IUser
}

export type CheckAuthFail = {
  type: typeof ActionType.USER_CHECKAUTH_FAIL
  payload: string
}

export type AuthActionTypes =
  | RegistrationRequest
  | RegistrationSuccess
  | RegistrationFail
  | LoginRequest
  | LoginSuccess
  | LoginFail
  | LogOutRequest
  | LogOutSuccess
  | LogOutFail
  | CheckAuthRequest
  | CheckAuthSuccess
  | CheckAuthFail
