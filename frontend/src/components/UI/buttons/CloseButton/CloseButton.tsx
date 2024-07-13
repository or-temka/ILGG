import { HTMLAttributes } from 'react'

import styles from './CloseButton.module.scss'

interface CloseButtonProps extends HTMLAttributes<HTMLDivElement> {
  isWithoutPadding?: boolean
  className?: string
  crossClassName?: string

  [key: string]: any
}

function CloseButton({
  isWithoutPadding = false,
  className = '',
  crossClassName = '',
  ...restProps
}: CloseButtonProps) {
  return (
    <div
      className={[
        styles.closeButton,
        className,
        isWithoutPadding && styles.closeButton_withoutPadding,
      ].join(' ')}
      {...restProps}
    >
      <div
        className={[styles.closeButton__cross, crossClassName].join(' ')}
      ></div>
    </div>
  )
}

export default CloseButton
