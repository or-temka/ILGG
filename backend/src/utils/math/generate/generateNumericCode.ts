const generateNumericCode = (length: number): string => {
  if (length <= 0) {
    throw new Error('Length must be a positive number')
  }

  const min = Math.pow(10, length - 1)
  const max = Math.pow(10, length) - 1

  return Math.floor(min + Math.random() * (max - min + 1)).toString()
}

export default generateNumericCode
