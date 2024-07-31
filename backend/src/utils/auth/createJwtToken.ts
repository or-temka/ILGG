import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'

import { JWT_ACCESS_KEY } from '../../PASSWORDS'

export const createJwtTokent = (userId: Types.ObjectId) => {
  return jwt.sign(
    {
      _id: userId,
    },
    JWT_ACCESS_KEY
  )
}
