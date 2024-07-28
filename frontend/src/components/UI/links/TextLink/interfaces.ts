import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

import { Variant } from './enums'

export interface TextLinkProps extends LinkProps {
  children?: ReactNode
  variant?: Variant
  text?: string
  className?: string
  [key: string]: any
}
