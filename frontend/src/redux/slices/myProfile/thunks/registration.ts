import { createAsyncThunk } from '@reduxjs/toolkit'

import AuthService from 'services/authService'

const registration = createAsyncThunk(
  'myProfile/registration',
  async (
    userData: {
      login: string
      name: string
      password: string
      confirmPassword: string
      email: string
      activationLink: string
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await AuthService.registration(
        userData.login,
        userData.name,
        userData.password,
        userData.confirmPassword,
        userData.email,
        userData.activationLink
      )

      localStorage.setItem('token', response.data.accessToken)
      return response.data.user
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export default registration
