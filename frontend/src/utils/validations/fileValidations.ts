export const thisFileIsImage = (file: File): Boolean => {
  const validTypes = ['image/jpeg', 'image/png', 'image/jpg']
  return validTypes.includes(file.type)
}

export const thisFileMoreMb = (file: File, sizeInMb = 2): Boolean => {
  return file.size > sizeInMb * 1024 * 1024
}
