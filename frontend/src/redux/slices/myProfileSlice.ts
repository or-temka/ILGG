import axios, { AxiosError } from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IMyUser } from 'models/myUser/IMyUser'
import { IMyUserBalance } from 'models/myUser/IMyUserBalance'
import { AuthResponse } from 'models/response/AuthResponse'
import { API_URL } from 'variables'

import AuthService from 'services/authService'

//#region reducers interfaces
// interface SetUserAction {
//   type: string
//   payload: IMyUser | null
// }
//#endregion

export const login = createAsyncThunk(
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

export const registration = createAsyncThunk(
  'myProfile/registration',
  async (
    userData: {
      login: string
      email: string
      name: string
      password: string
      confirmPassword: string
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await AuthService.registration(
        userData.login,
        userData.email,
        userData.name,
        userData.password,
        userData.confirmPassword
      )

      localStorage.setItem('token', response.data.accessToken)
      return response.data.user
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const logout = createAsyncThunk(
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

export const checkAuth = createAsyncThunk(
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

export type ProfileState = {
  data: IMyUser | null
  loading: boolean
  error: string | null | undefined
}

const initialState: ProfileState = {
  data: null,
  loading: false,
  error: null,
}

const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers: {
    // setUser: (state: ProfileState, action: SetUserAction): any => ({
    //   data: action.payload,
    //   loading: false,
    //   error: null,
    // }),
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      // registration
      .addCase(registration.pending, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(registration.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      // logout
      .addCase(logout.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false
        state.data = null
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      // checkAuth
      .addCase(checkAuth.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

// export const { setUser } = myProfileSlice.actions

export const selectMyUser = (state: any): ProfileState => state.myProfile
export const selectMyUserData = (state: any): ProfileState =>
  state.myProfile.data
export const selectMyBalance = (
  state: any
): IMyUserBalance | null | undefined =>
  state.myProfile.data
    ? state.myProfile.data.balance
    : state.myProfile.loading
    ? null
    : undefined

export default myProfileSlice.reducer
