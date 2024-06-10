import { AxiosResponse } from 'axios'

import $api from 'http/axios'

import { AuthResponse } from 'models/response/AuthResponse'

export default class AuthService {
  static async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('user/sign-in', { login, password })
  }

  static async registration(
    login: string,
    email: string,
    name: string,
    password: string,
    confirmPassword: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('user/sign-up', {
      login,
      email,
      name,
      password,
      confirmPassword,
    })
  }

  static async logout(): Promise<void> {
    return $api.post('user/log-out')
  }
}