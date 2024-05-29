export const SITE_NAME: string = 'ILGG'

export type cssVariable = {
  cssName: `--${string}`
  value: string
}

export interface ISiteThemeColors {
  backgroundColor: cssVariable
  backgroundColorReverseTheme: cssVariable
  background2Color: cssVariable
  background3Color: cssVariable
  background3HoverColor: cssVariable
  background3ActiveColor: cssVariable
  background4Color: cssVariable
  background4HoverColor: cssVariable
  background4ActiveColor: cssVariable
  background5Color: cssVariable
  background6Color: cssVariable
  background6ColorRGB: cssVariable

  transparentBackgroundMainColor: cssVariable

  activeColor: cssVariable
  activeHoverColor: cssVariable
  active2Color: cssVariable
  active2V2Color: cssVariable
  active2HoverColor: cssVariable
  active2Hover2Color: cssVariable
  active2V2HoverColor: cssVariable

  borderColor: cssVariable
  darkBorderColor: cssVariable

  errorColor: cssVariable
  successColor: cssVariable
  successHoverColor: cssVariable
  success2Color: cssVariable
  success2HoverColor: cssVariable
  success3Color: cssVariable
  warninColor: cssVariable

  // text colors
  textColor: cssVariable
  textHoverColor: cssVariable
  textWhiteGreyColor: cssVariable
  textReverseColor: cssVariable
  textReverseHoverColor: cssVariable
  lightTextColor: cssVariable
  greyTextColor: cssVariable
  linkBlueColor: cssVariable
  linkBlueHoverColor: cssVariable
  errorTextColor: cssVariable
  errorTextHoverColor: cssVariable
  successTextColor: cssVariable
  successTextHoverColor: cssVariable
  warningTextColor: cssVariable
  warningTextHoverColor: cssVariable

  // for gradient
  lgMainDarkColor: cssVariable
  lgMain1Transparent1Color: cssVariable
  lgMain1Transparent2Color: cssVariable
  lgMain1Transparent3Color: cssVariable
  lgMain2Transparent1Color: cssVariable
  lgMain2Transparent2Color: cssVariable
  lgMain3Transparent1Color: cssVariable

  // other
  backgroundPhotoTransparent: cssVariable
}

export const darkSiteThemeColors: ISiteThemeColors = {
  backgroundColor: { cssName: '--background-color', value: '#1d2033' },
  backgroundColorReverseTheme: {
    cssName: '--background-color--reverse-theme',
    value: '#ffffff',
  },
  background2Color: { cssName: '--background-2-color', value: '#171b2a' },
  background3Color: { cssName: '--background-3-color', value: '#343647' },
  background3HoverColor: {
    cssName: '--background-3-hover-color',
    value: '#3d4054',
  },
  background3ActiveColor: {
    cssName: '--background-3-active-color',
    value: '#4a4d64',
  },
  background4Color: { cssName: '--background-4-color', value: '#252837' },
  background4HoverColor: {
    cssName: '--background-4-hover-color',
    value: '#2c3042',
  },
  background4ActiveColor: {
    cssName: '--background-4-active-color',
    value: '#34394f',
  },
  background5Color: { cssName: '--background-5-color', value: '#121622' },
  background6Color: { cssName: '--background-6-color', value: '#21263a' },
  background6ColorRGB: {
    cssName: '--background-6-color-rgb',
    value: '33, 38, 58',
  },

  transparentBackgroundMainColor: {
    cssName: '--transparent-background-main-color',
    value: 'rgba(23, 27, 42, 0.7)',
  },

  activeColor: { cssName: '--active-color', value: '#ffffff' },
  activeHoverColor: { cssName: '--active-hover-color', value: '#f4f4f4' },
  active2Color: { cssName: '--active-2-color', value: '#3d79fc' },
  active2V2Color: { cssName: '--active-2-v2-color', value: '#1c47a7' },
  active2HoverColor: { cssName: '--active-2-hover-color', value: '#5e90ff' },
  active2Hover2Color: { cssName: '--active-2-hover-2-color', value: '#3970e9' },
  active2V2HoverColor: {
    cssName: '--active-2-v2-hover-color',
    value: '#183d8f',
  },

  borderColor: { cssName: '--border-color', value: '#5b5b69' },
  darkBorderColor: { cssName: '--dark-border-color', value: '#3f3f49' },

  errorColor: { cssName: '--error-color', value: '#a43434' },
  successColor: { cssName: '--success-color', value: '#8ed629' },
  successHoverColor: { cssName: '--success-hover-color', value: '#84c726' },
  success2Color: { cssName: '--success-2-color', value: '#6ba721' },
  success2HoverColor: { cssName: '--success-2-hover-color', value: '#5f941d' },
  success3Color: { cssName: '--success-3-color', value: '#2dff81' },
  warninColor: { cssName: '--warning-color', value: '#ffde32' },

  // text color
  textColor: { cssName: '--text-color', value: '#ffffff' },
  textHoverColor: { cssName: '--text-hover-color', value: '#f4f4f4' },
  textWhiteGreyColor: { cssName: '--text-white-grey-color', value: '#c6c6c6' },
  textReverseColor: { cssName: '--text-reverse-color', value: '#171b2a' },
  textReverseHoverColor: {
    cssName: '--text-reverse-hover-color',
    value: '#121622',
  },
  lightTextColor: { cssName: '--light-text-color', value: '#5b5b69' },
  greyTextColor: { cssName: '--grey-text-color', value: '#8f8fa3' },
  linkBlueColor: { cssName: '--link-blue-color', value: '#3d79fc' },
  linkBlueHoverColor: { cssName: '--link-blue-hover-color', value: '#5e90ff' },
  errorTextColor: { cssName: '--error-text-color', value: '#ff4242' },
  errorTextHoverColor: {
    cssName: '--error-text-hover-color',
    value: '#ff5858',
  },
  successTextColor: { cssName: '--success-text-color', value: '#2dff81' },
  successTextHoverColor: {
    cssName: '--success-text-hover-color',
    value: '#50ff96',
  },
  warningTextColor: { cssName: '--warning-text-color', value: '#ffde32' },
  warningTextHoverColor: {
    cssName: '--warning-text-hover-color',
    value: '#ffde32',
  },

  // for gradient
  lgMainDarkColor: {
    cssName: '--lg-main-dark-color',
    value: '#0a0d17',
  },
  lgMain1Transparent1Color: {
    cssName: '--lg-main-1-transparent-1-color',
    value: 'rgba(23, 27, 42, 1)',
  },
  lgMain1Transparent2Color: {
    cssName: '--lg-main-1-transparent-2-color',
    value: 'rgba(13, 17, 28, 0.25)',
  },
  lgMain1Transparent3Color: {
    cssName: '--lg-main-1-transparent-3-color',
    value: 'rgba(10, 13, 23, 0)',
  },
  lgMain2Transparent1Color: {
    cssName: '--lg-main-2-transparent-1-color',
    value: 'rgba(26, 28, 45, 1)',
  },
  lgMain2Transparent2Color: {
    cssName: '--lg-main-2-transparent-2-color',
    value: 'rgba(29, 32, 51, 0)',
  },
  lgMain3Transparent1Color: {
    cssName: '--lg-main-3-transparent-1-color',
    value: '29, 32, 51',
  },

  // other
  backgroundPhotoTransparent: {
    cssName: '--background-photo-transparent',
    value: 'rgba(29, 32, 51, 0.92)',
  },
}

export const lightSiteThemeColors: ISiteThemeColors = {
  backgroundColor: { cssName: '--background-color', value: '#ffffff' },
  backgroundColorReverseTheme: {
    cssName: '--background-color--reverse-theme',
    value: '#1d2033',
  },
  background2Color: { cssName: '--background-2-color', value: '#f5f5f5' },
  background3Color: { cssName: '--background-3-color', value: '#f0f0f0' },
  background3HoverColor: {
    cssName: '--background-3-hover-color',
    value: '#e9e9e9',
  },
  background3ActiveColor: {
    cssName: '--background-3-active-color',
    value: '#e5e5e5',
  },
  background4Color: { cssName: '--background-4-color', value: '#ebebeb' },
  background4HoverColor: {
    cssName: '--background-4-hover-color',
    value: '#e1e1e1',
  },
  background4ActiveColor: {
    cssName: '--background-4-active-color',
    value: '#d7d7d7',
  },
  background5Color: { cssName: '--background-5-color', value: '#f9f9f9' },
  background6Color: { cssName: '--background-6-color', value: '#ececec' },
  background6ColorRGB: {
    cssName: '--background-6-color-rgb',
    value: '236, 236, 236',
  },

  transparentBackgroundMainColor: {
    cssName: '--transparent-background-main-color',
    value: 'rgba(245, 245, 245, 0.7)',
  },

  activeColor: { cssName: '--active-color', value: '#1d2033' },
  activeHoverColor: { cssName: '--active-hover-color', value: '#343647' },
  active2Color: { cssName: '--active-2-color', value: '#3d79fc' },
  active2V2Color: { cssName: '--active-2-v2-color', value: '#1c47a7' },
  active2HoverColor: { cssName: '--active-2-hover-color', value: '#5e90ff' },
  active2Hover2Color: { cssName: '--active-2-hover-2-color', value: '#3970e9' },
  active2V2HoverColor: {
    cssName: '--active-2-v2-hover-color',
    value: '#183d8f',
  },

  borderColor: { cssName: '--border-color', value: '#cccccc' },
  darkBorderColor: { cssName: '--dark-border-color', value: '#b3b3b3' },

  errorColor: { cssName: '--error-color', value: '#a43434' },
  successColor: { cssName: '--success-color', value: '#8ed629' },
  successHoverColor: { cssName: '--success-hover-color', value: '#84c726' },
  success2Color: { cssName: '--success-2-color', value: '#6ba721' },
  success2HoverColor: { cssName: '--success-2-hover-color', value: '#5f941d' },
  success3Color: { cssName: '--success-3-color', value: '#2dff81' },
  warninColor: { cssName: '--warning-color', value: '#ffde32' },

  // text color
  textColor: { cssName: '--text-color', value: '#1d2033' },
  textHoverColor: { cssName: '--text-hover-color', value: '#171b2a' },
  textWhiteGreyColor: { cssName: '--text-white-grey-color', value: '#5c5c5c' },
  textReverseColor: { cssName: '--text-reverse-color', value: '#ffffff' },
  textReverseHoverColor: {
    cssName: '--text-reverse-hover-color',
    value: '#f5f5f5',
  },
  lightTextColor: { cssName: '--light-text-color', value: '#5b5b69' },
  greyTextColor: { cssName: '--grey-text-color', value: '#343440' },
  linkBlueColor: { cssName: '--link-blue-color', value: '#0056b3' },
  linkBlueHoverColor: { cssName: '--link-blue-hover-color', value: '#0048a0' },
  errorTextColor: { cssName: '--error-text-color', value: '#a43434' },
  errorTextHoverColor: {
    cssName: '--error-text-hover-color',
    value: '#8a2929',
  },
  successTextColor: { cssName: '--success-text-color', value: '#558a1b' },
  successTextHoverColor: {
    cssName: '--success-text-hover-color',
    value: '#446d15',
  },
  warningTextColor: { cssName: '--warning-text-color', value: '#e5b800' },
  warningTextHoverColor: {
    cssName: '--warning-text-hover-color',
    value: '#ccaa00',
  },

  // for gradient
  lgMainDarkColor: {
    cssName: '--lg-main-dark-color',
    value: '#f5f5f5',
  },
  lgMain1Transparent1Color: {
    cssName: '--lg-main-1-transparent-1-color',
    value: 'rgba(230, 230, 240, 1)',
  },
  lgMain1Transparent2Color: {
    cssName: '--lg-main-1-transparent-2-color',
    value: 'rgba(230, 230, 240, 0.25)',
  },
  lgMain1Transparent3Color: {
    cssName: '--lg-main-1-transparent-3-color',
    value: 'rgba(230, 230, 240, 0)',
  },
  lgMain2Transparent1Color: {
    cssName: '--lg-main-2-transparent-1-color',
    value: 'rgb(243, 243, 243)',
  },
  lgMain2Transparent2Color: {
    cssName: '--lg-main-2-transparent-2-color',
    value: 'rgba(234, 234, 234, 0)',
  },
  lgMain3Transparent1Color: {
    cssName: '--lg-main-3-transparent-1-color',
    value: '247, 247, 247',
  },

  // other
  backgroundPhotoTransparent: {
    cssName: '--background-photo-transparent',
    value: 'rgba(224, 224, 224, 0.5)',
  },
}

export const enum siteThemes {
  dark = 'dark',
  light = 'light',
}
