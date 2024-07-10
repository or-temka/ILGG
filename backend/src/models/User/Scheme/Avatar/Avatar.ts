import mongoose from 'mongoose'

const AvatarSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  originalFilename: {
    type: String,
  },
  size: {
    type: Number,
  },
})

export default AvatarSchema
