import { useRef } from 'react'

import { ScrollableContainerProps } from './interfaces'
import { useScrollVisibility } from 'hooks'
import styles from './ScrollableContainer.module.scss'

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

export { ScrollableContainer }
