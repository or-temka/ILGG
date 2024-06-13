import { AxiosResponse } from 'axios'

import $api from 'http/axios'

import {
  AuthResponse,
  SendActivationEmailCodeResponse,
} from 'models/response/AuthResponse'

export default class AuthService {
  static async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('user/sign-in', { login, password })
  }

  static async registrationEmail(
    email: string,
  ): Promise<AxiosResponse<any>> {
    return $api.post<any>('user/sign-up-email', {
      email,
    })
  }

  static async repeatSendEmail(
    email: string,
  ): Promise<AxiosResponse<any>> {
    return $api.post<any>('user/repeat-send-sign-up-email', {
      email,
    })
  }

  static async sendEmailActivationCode(
    email: string,
    activationCode: string
  ): Promise<AxiosResponse<SendActivationEmailCodeResponse>> {
    return $api.get<SendActivationEmailCodeResponse>('user/sign-up-email', {
      params: { email, activationCode },
    })
  }

  static async isActivationEmailLink(
    email: string,
    activationLink: string
  ): Promise<AxiosResponse<any>> {
    return $api.get<any>('user/sign-up', {
      params: { email, activationLink },
    })
  }

  static async registration(
    login: string,
    name: string,
    password: string,
    confirmPassword: string,
    email: string,
    activationLink: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('user/sign-up', {
      login,
      name,
      password,
      confirmPassword,
      email,
      activationLink,
    })
  }

  static async logout(): Promise<void> {
    return $api.post('user/log-out')
  }
}
