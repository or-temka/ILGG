import ShopAppsState, { FilterShopAppsByAction } from '../interfaces'

const filterShopAppsBy = (
  state: ShopAppsState,
  action: FilterShopAppsByAction
): void => {
  const fieldNameForFilter = action.payload.filterFieldName
  const filtersArray = action.payload.filtersSet

  const initialApps = [...state.data.init]

  if (filtersArray === null || filtersArray.length === 0) {
    state.data.filtered = initialApps
  } else {
    const filteredApps = initialApps.filter((app) =>
      app[fieldNameForFilter].some((value) => filtersArray?.includes(value))
    )

    state.data.filtered = filteredApps
  }
}

export default filterShopAppsBy
