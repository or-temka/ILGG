import sortObjectsArrayBy from 'utils/sortObjectsArrayBy'
import ShopAppsState, {
  SorterFields,
  SortShopAppsByAction,
} from '../interfaces'
import transformStringToDate from 'utils/transformStringToDate'

const fieldForSortInArray: { [key in SorterFields]: string } = {
  price: 'price',
  rating: 'rating',
  releaseDate: 'releaseDate',
  popularity: 'statistics.views.month',
}

const sortShopAppsBy = (
  state: ShopAppsState,
  action: SortShopAppsByAction
): void => {
  const fieldNameForSort = action.payload.sortFieldName
  const sortValue = action.payload.sortValue

  const isDate = ['releaseDate'].includes(fieldNameForSort)

  const initialApps = [...state.data.filtered]

  const sortedApps = sortObjectsArrayBy(
    initialApps,
    fieldForSortInArray[fieldNameForSort],
    sortValue,
    isDate ? transformStringToDate : undefined
  )

  state.data.filtered = sortedApps
}

export default sortShopAppsBy
