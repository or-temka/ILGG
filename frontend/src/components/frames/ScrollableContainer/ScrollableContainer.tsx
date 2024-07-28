import { useRef } from 'react'

import styles from './ScrollableContainer.module.scss'
import { ScrollableContainerProps } from './interfaces'
import { useScrollVisibility } from 'hooks'

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
