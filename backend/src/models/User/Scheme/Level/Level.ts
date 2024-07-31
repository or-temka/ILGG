import mongoose from 'mongoose'

import { LevelInterface } from './interfaces/LevelInterface'

const LevelSchema = new mongoose.Schema<LevelInterface>({
  value: {
    type: Number,
    required: true,
    default: 0,
  },
  points: {
    now: {
      type: Number,
      required: true,
      default: 0,
    },
    atLevel: {
      type: Number,
      required: true,
      default: 1000,
    },
  },
})

export default LevelSchema
