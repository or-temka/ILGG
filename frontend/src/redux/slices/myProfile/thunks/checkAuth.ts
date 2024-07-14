import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { AuthResponse } from 'models/response/AuthResponse'
import { API_URL } from 'variables'

const checkAuth = createAsyncThunk(
  'myProfile/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<AuthResponse>(
        `${API_URL}/user/refresh`,
        { withCredentials: true }
      )

      localStorage.setItem('token', response.data.accessToken)
      return response.data.user
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export default checkAuth
