import { HTMLAttributes } from 'react'

export interface CloseButtonProps extends HTMLAttributes<HTMLDivElement> {
  isWithoutPadding?: boolean
  className?: string
  crossClassName?: string

  [key: string]: any
}
