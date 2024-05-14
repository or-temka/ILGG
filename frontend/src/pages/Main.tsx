import { useEffect } from 'react'

interface MainProps {
  addNewFloatingPanel?: () => void
  setPageName: (name: string) => void
}

function Main({ addNewFloatingPanel = () => {}, setPageName }: MainProps) {
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
