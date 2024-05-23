import { SITE_NAME } from '../variables'

export const setPageName = (name: string) => {
  document.title = `${SITE_NAME} | ${name}`
}
export const clearPageName = () => {
  document.title = SITE_NAME
}
