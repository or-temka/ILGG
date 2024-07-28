import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from 'services'

const login = createAsyncThunk(
  'myProfile/login',
  async (
    credentials: { login: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await AuthService.login(
        credentials.login,
        credentials.password
      )
      localStorage.setItem('token', response.data.accessToken)
      return response.data.user
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export default login
