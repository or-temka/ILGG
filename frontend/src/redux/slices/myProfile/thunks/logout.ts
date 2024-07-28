import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from 'services'

const logout = createAsyncThunk(
  'myProfile/logout',
  async (_, { rejectWithValue }) => {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      return null
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export default logout
