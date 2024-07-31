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
  attemptDate: {
    type: Date,
    default: () => Date.now(),
  },
  attemptEnterCode: {
    type: Number,
    default: 4,
    required: true,
  },

  expireAt: {
    type: Date,
    default: () => Date.now() + 20 * 60 * 1000,
    index: { expires: '20m' },
  },
})

const UnauthorizedEmailModel = mongoose.model(
  'UnauthorizedEmail',
  UnauthorizedEmailSchema
)

export { UnauthorizedEmailModel }
