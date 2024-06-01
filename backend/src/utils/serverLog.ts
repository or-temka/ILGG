import clc from 'cli-colors'

export const serverLog = (text: string) => {
  console.log(clc.green('[msg]') + ' ' + text)
}

export const serverError = (text: string) => {
  console.log(clc.red('[error]') + ' ' + text)
}

export const serverMsg = (text: string) => {
  console.log(clc.green(text))
}
