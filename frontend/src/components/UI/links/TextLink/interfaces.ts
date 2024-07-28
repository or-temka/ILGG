import { textLinkVariant } from 'components'
import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

export interface TextLinkProps extends LinkProps {
  children?: ReactNode
  variant?: textLinkVariant
  text?: string
  className?: string
  [key: string]: any
}
