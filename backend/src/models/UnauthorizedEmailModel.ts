import mongoose from 'mongoose'

const UnauthorizedEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  activationLink: {
    type: String,
  },
  activationCode: {
    type: String,
  },
  attempt: {
    type: Number,
    default: 0,
  },

  expireAt: {
    type: Date,
    default: () => Date.now() + 20 * 60 * 1000,
    index: { expires: '20m' },
  },
})

export default mongoose.model('UnauthorizedEmail', UnauthorizedEmailSchema)
