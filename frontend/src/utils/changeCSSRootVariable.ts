const root = document.documentElement

const changeCSSRootVariable = (variableName: string, newValue: string) => {
  root.style.setProperty(variableName, newValue)
}

export default changeCSSRootVariable
