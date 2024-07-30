import mongoose from 'mongoose'

const TokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  refreshToken: {
    type: String,
    required: true,
  },
})

const TokenModel = mongoose.model('Token', TokenSchema)

export { TokenModel }
