import mongoose from 'mongoose'

import { AvatarInterface } from './interfaces/AvatarInterface'

const AvatarSchema = new mongoose.Schema<AvatarInterface>({
  originalFilename: {
    type: String,
  },
  size: {
    type: Number,
  },
  qualities: {
    good: {
      filename: {
        type: String,
        required: true,
      },
    },
    medium: {
      filename: {
        type: String,
        required: true,
      },
    },
    low: {
      filename: {
        type: String,
        required: true,
      },
    },
  },
})

export default AvatarSchema
