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
  attempt: {
    type: Number,
    default: 0,
  },

  expireAt: {
    type: Date,
    default: () => Date.now() + 10 * 60 * 1000,
    index: { expires: '10m' },
  },
})

export default mongoose.model('UnauthorizedEmail', UnauthorizedEmailSchema)
