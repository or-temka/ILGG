import AppsLibraryState from 'redux/slices/myAppsLibrary/interfaces'

export interface AppsListProps {
  apps: AppsLibraryState
  classNames?: {
    wrapper?: string
  }
}
