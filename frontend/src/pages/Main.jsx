import { useEffect } from 'react'

function Main({ addNewFloatingPanel = () => {}, setPageName }) {
  useEffect(() => {
    setPageName('Главная')
  }, [])

  return (
    <>
      <div className="wrapper"></div>
    </>
  )
}

export default Main
