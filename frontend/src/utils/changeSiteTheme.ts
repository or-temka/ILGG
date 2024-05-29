import {
  cssVariable,
  darkSiteThemeColors,
  lightSiteThemeColors,
  siteThemes,
} from '../variables'
import changeCSSRootVariable from './changeCSSRootVariable'

const changeSiteTheme = () => {
  // Получение нынешней темы
  let nowSiteTheme = localStorage.getItem('site-theme')
  if (!nowSiteTheme) {
    localStorage.setItem('site-theme', siteThemes.dark)
    nowSiteTheme = siteThemes.dark
  }
  const nextSiteTheme =
    nowSiteTheme === siteThemes.dark ? siteThemes.light : siteThemes.dark

  setSiteTheme(nextSiteTheme)

  localStorage.setItem('site-theme', nextSiteTheme)
}

const setSiteTheme = (siteTheme: string | null) => {
  // Установка темы
  const theme =
    siteTheme === siteThemes.dark ? darkSiteThemeColors : lightSiteThemeColors
  const themeVariables = Object.values(theme)
  themeVariables.map((variable: cssVariable) => {
    changeCSSRootVariable(variable.cssName, variable.value)
  })
}

export const setSiteThemeFromLocalStorage = () => {
  let nowSiteTheme = localStorage.getItem('site-theme')
  if (!nowSiteTheme) return

  setSiteTheme(nowSiteTheme)
}

export default changeSiteTheme
