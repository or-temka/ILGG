import mongoose from 'mongoose'
import { GamesPrivacyInterface } from './interfaces/GamesPrivacyInterface'

const GamesPrivacySchema = new mongoose.Schema<GamesPrivacyInterface>({
  availableToView: {
    type: String,
    required: true,
    default: 'all',
  },
})

export default GamesPrivacySchema
