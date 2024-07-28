import axios from 'axios'

import { API_URL } from '../variables'
import { response } from 'models'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get<response.AuthResponse>(
          `${API_URL}/user/refresh`,
          { withCredentials: true }
        )
        localStorage.setItem('token', response.data.accessToken)

        return $api.request(originalRequest)
      } catch (error) {}
    }

    throw error
  }
)

export default $api
