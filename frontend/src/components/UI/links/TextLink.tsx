import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import styles from './TextLink.module.scss'

export enum Variant {
  simple = 'simple',
  text = 'text',
  bold = 'bold',
}

interface TextLinkProps {
  to: string
  children?: ReactNode
  variant?: Variant
  text?: string
  className?: string
}

function TextLink({
  to = '/',
  children,
  variant = Variant.simple, // types: simple, text, bold
  text = '',
  className = '',
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
      to={to}
    >
      {text || children}
    </Link>
  )
}

export default TextLink
