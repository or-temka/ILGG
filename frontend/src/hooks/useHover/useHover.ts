import React, { useCallback, useEffect, useState } from 'react'

type useHoverOptions = {
  mode?: 'start' | 'end' | number
}

function useHover(
  ref: React.RefObject<Element>,
  { mode = 'start' }: useHoverOptions = {}
) {
  const [isHovering, setIsHovering] = useState(false)

  const on = useCallback(() => setIsHovering(true), [])
  const off = useCallback(() => {
    if (mode === 'start') setIsHovering(false)
    else if (mode === 'end') {
      const node = ref.current
      if (!node) return
      const transitionDuration = getComputedStyle(node).transitionDuration
      const duration = parseFloat(transitionDuration) * 1000
      setTimeout(() => setIsHovering(false), duration)
    } else setTimeout(() => setIsHovering(false), mode)
  }, [mode, ref])

  useEffect(() => {
    if (!ref.current) return

    const node = ref.current

    node.addEventListener('mouseenter', on)
    node.addEventListener('mousemove', on)
    node.addEventListener('mouseleave', off)

    return function () {
      node.removeEventListener('mouseenter', on)
      node.removeEventListener('mousemove', on)
      node.removeEventListener('mouseleave', off)
    }
  }, [ref, off, on])

  return isHovering
}

export default useHover
