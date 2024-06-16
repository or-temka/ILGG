import { ReactNode, useRef } from 'react'

import useScrollVisibility from 'hooks/useScrollVisibility'

import styles from './ScrollableContainer.module.scss'

interface ScrollableContainerProps {
  children?: ReactNode
  className?: string
}

const ScrollableContainer = ({
  children,
  className,
}: ScrollableContainerProps) => {
  const containerRef = useRef(null)
  const isScrolling = useScrollVisibility(containerRef)

  return (
    <div
      ref={containerRef}
      className={[
        styles.container,
        isScrolling ? styles.container_scrolling : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export default ScrollableContainer
