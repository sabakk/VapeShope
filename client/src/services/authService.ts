import $api from './api'
import { AxiosResponse } from 'axios'
import { AuthResponse } from '../models/response/authResponse'

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, password })
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', { email, password })
  }

  static async logout(): Promise<void> {
    return $api.post('/logout')
  }
  static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
    return $api.get<AuthResponse>('/refresh', { withCredentials: true })
  }
}
