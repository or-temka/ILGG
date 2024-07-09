import mongoose from 'mongoose'

import PrivacySchema from './Scheme/Privacy/Privacy'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  isOnline: {
    type: Boolean,
    required: false,
  },
  balance: {
    type: Number,
    required: true,
  },

  about: String,

  privacy: {
    type: PrivacySchema,
    required: true,
    default: () => ({}),
  },
})

export default mongoose.model('User', UserSchema)
