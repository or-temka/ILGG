import { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import styles from './TextLink.module.scss'

export enum Variant {
  simple = 'simple',
  text = 'text',
  bold = 'bold',
}

interface TextLinkProps extends LinkProps {
  children?: ReactNode
  variant?: Variant
  text?: string
  className?: string
  [key: string]: any
}

function TextLink({
  children,
  variant = Variant.simple, // types: simple, text, bold
  text = '',
  className = '',
  ...restProps
}: TextLinkProps) {
  return (
    <Link
      className={[
        styles.link,
        variant === 'simple'
          ? styles.link_simple
          : variant === 'text'
          ? styles.link_text
          : styles.link_bold,
        className,
      ].join(' ')}
      {...restProps}
    >
      {text || children}
    </Link>
  )
}

export default TextLink
