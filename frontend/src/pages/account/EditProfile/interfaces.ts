const contentType = [
  'profile',
  'main',
  'password',
  'avatar',
  'privacy',
] as const

type ContentType = (typeof contentType)[number]

export const isContentType = (value: any): value is ContentType => {
  return contentType.includes(value)
}

export default ContentType
