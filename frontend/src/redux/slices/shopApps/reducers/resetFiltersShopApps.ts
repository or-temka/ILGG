import ShopAppsState from '../interfaces'

const resetFiltersShopApps = (state: ShopAppsState): void => {
  state.data.filtered = state.data.init
}

export default resetFiltersShopApps
