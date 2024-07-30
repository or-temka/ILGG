export const serverLog = (text: string) => {
  console.log(`\u001b[32m[msg]\u001b[0m ${text}`)
}

export const serverError = (text: string) => {
  console.log(`\u001b[31m[error]\u001b[0m ${text}`)
}

export const serverFatalError = (text: string) => {
  console.log(`\u001b[41m[error]\u001b[0m \u001b[31m${text}\u001b[0m`)
}

export const serverMsg = (text: string) => {
  console.log(`\u001b[32m[msg] ${text}\u001b[0m`)
}

export const serverHint = (text: string) => {
  console.log(`\u001b[30m[hint] ${text}\u001b[0m`)
}
