import { AxiosResponse } from 'axios'

import $api from 'http/axios'

import { AuthResponse } from 'models/response/AuthResponse'

export default class AuthService {
  static async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/sign-in', { login, password })
  }

  static async registration(
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/sign-up', { login, password })
  }

  static async logout(): Promise<void> {
    return $api.post('/log-out')
  }
}
