import { AxiosResponse } from 'axios'
import axios from '../../axios'

interface IUserData {
  name: string
  login: string
  email: string
  password: string
  confirmPassword: string
}

const fetchSignUp = async (
  userData: IUserData
): Promise<AxiosResponse | undefined> => {
  try {
    return await axios.post('/user/sign-up', userData)
  } catch (error: any) {
    const response: AxiosResponse | undefined = error?.response || undefined
    return response
  }
}

export default fetchSignUp
