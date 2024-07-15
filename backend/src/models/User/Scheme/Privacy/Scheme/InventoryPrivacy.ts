import mongoose from 'mongoose'
import { InventoryPrivacyInterface } from './interfaces/InventoryPrivacyInterface'

const InventoryPrivacySchema = new mongoose.Schema<InventoryPrivacyInterface>({
  availableToView: {
    type: String,
    required: true,
    default: 'all',
  },
})

export default InventoryPrivacySchema
