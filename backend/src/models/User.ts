import mongoose from 'mongoose'

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
})

export default mongoose.model('User', UserSchema)
