import { ObjectId } from 'mongodb'

export const isMongoId = (id: string) => {
  const objectIdRegex = /^[0-9a-fA-F]{24}$/
  return objectIdRegex.test(id)
}
