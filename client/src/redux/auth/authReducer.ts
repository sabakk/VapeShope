import { IUser } from '../../models/IUser'
import { ActionType, AuthActionTypes } from './authTypes'

export interface UserState {
  loading: boolean
  error: null | string
  user: IUser
  isAuth: boolean
}

const initialState: UserState = {
  loading: false,
  error: null,
  user: { email: '', isActivated: false, id: '' },
  isAuth: false,
}

const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case ActionType.USER_REGISTRATION_REQUEST:
      return { loading: true }
    case ActionType.USER_REGISTRATION_SUCCESS:
      return { user: action.payload, isAuth: true }
    case ActionType.USER_REGISTRATION_FAIL:
      return { error: action.payload }
    case ActionType.USER_LOGIN_REQUEST:
      return { loading: true }
    case ActionType.USER_LOGIN_SUCCESS:
      return { user: action.payload, isAuth: true }
    case ActionType.USER_LOGIN_FAIL:
      return { error: action.payload }
    case ActionType.USER_LOGOUT_REQUEST:
      return { loading: true }
    case ActionType.USER_LOGOUT_SUCCESS:
      return {}
    case ActionType.USER_LOGOUT_FAIL:
      return { error: action.payload }
    case ActionType.USER_CHECKAUTH_REQUEST:
      return { loading: true }
    case ActionType.USER_CHECKAUTH_SUCCESS:
      return { user: action.payload, isAuth: true }
    case ActionType.USER_CHECKAUTH_FAIL:
      return { error: action.payload }
    default:
      return state
  }
}

export default authReducer
