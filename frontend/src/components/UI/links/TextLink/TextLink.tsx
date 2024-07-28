import { Link } from 'react-router-dom'

import { TextLinkProps } from './interfaces'
import { textLinkVariant } from './enums'
import styles from './TextLink.module.scss'

function TextLink({
  children,
  variant = textLinkVariant.simple, // types: simple, text, bold
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

export { TextLink, textLinkVariant }
