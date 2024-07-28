import { useEffect, useState } from 'react'

const useScrollVisibility = (ref: any) => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(ref.current.timeoutId)
      ref.current.timeoutId = setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
    }

    const element = ref.current
    if (element) {
      element.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll)
      }
    }
  }, [ref])

  return isScrolling
}

export default useScrollVisibility
