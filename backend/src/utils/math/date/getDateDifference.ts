const getDateDifference = (
  date1: Date,
  date2: Date,
  returnType: 'h' | 'm' | 's'
) => {
  const difference = Math.abs(date1.getTime() - date2.getTime())

  switch (returnType) {
    case 'h':
      return Math.floor(difference / (1000 * 60 * 60))
    case 'm':
      return Math.floor(difference / (1000 * 60))
    case 's':
      return Math.floor(difference / 1000)
    default:
      throw new Error('Указан неверный тип возращаемых данных для разницы дат.')
  }
}

export default getDateDifference
