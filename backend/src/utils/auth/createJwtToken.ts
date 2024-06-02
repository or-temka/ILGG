import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'

import { TOKEN_KEY } from '../../PASSWORDS'

const createJwtTokent = (userId: Types.ObjectId) => {
  return jwt.sign(
    {
      _id: userId,
    },
    TOKEN_KEY
  )
}

export default createJwtTokent
