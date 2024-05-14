import { MouseEventHandler } from 'react'

import styles from './CloseButton.module.scss'

interface CloseButtonProps {
  onClick: MouseEventHandler<HTMLDivElement>
  isWithoutPadding?: boolean
  className?: string
  crossClassName?: string
}

function CloseButton({
  onClick = () => {},
  isWithoutPadding = false,
  className = '',
  crossClassName = '',
}: CloseButtonProps) {
  return (
    <div
      className={[
        styles.closeButton,
        className,
        isWithoutPadding && styles.closeButton_withoutPadding,
      ].join(' ')}
      onClick={onClick}
    >
      <div
        className={[styles.closeButton__cross, crossClassName].join(' ')}
      ></div>
    </div>
  )
}

export default CloseButton
