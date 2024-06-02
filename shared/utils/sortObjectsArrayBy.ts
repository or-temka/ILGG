const getNestedValue = <T extends object>(obj: T, path: string) => {
  return path.split('.').reduce((acc: any, part) => acc && acc[part], obj)
}

const sortObjectsArrayBy = <T extends object>(
  array: T[],
  fieldPath: string,
  ascending: boolean | null = true,
  transformBeforeComparisonHandler: Function | undefined = undefined
) => {
  const arrSorted = array.sort((a, b) => {
    const aNestedValue = getNestedValue(a, fieldPath)
    const bNestedValue = getNestedValue(b, fieldPath)

    const aValue = transformBeforeComparisonHandler
      ? transformBeforeComparisonHandler(aNestedValue)
      : aNestedValue
    const bValue = transformBeforeComparisonHandler
      ? transformBeforeComparisonHandler(bNestedValue)
      : bNestedValue

    if (aValue === undefined && bValue === undefined) return 0
    if (aValue === undefined) return ascending ? -1 : 1
    if (bValue === undefined) return ascending ? 1 : -1

    if (aValue < bValue) return ascending ? -1 : 1
    if (aValue > bValue) return ascending ? 1 : -1
    return 0
  })

  return arrSorted
}

export default sortObjectsArrayBy
