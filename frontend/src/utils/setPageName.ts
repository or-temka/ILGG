import { SITE_NAME } from '../variables'

const setPageName = (name: string) => {
  document.title = `${SITE_NAME} | ${name}`
}

export default setPageName
