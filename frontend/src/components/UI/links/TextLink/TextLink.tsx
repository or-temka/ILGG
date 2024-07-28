import { Link } from 'react-router-dom'

import styles from './TextLink.module.scss'
import { TextLinkProps } from './interfaces'
import { Variant } from './enums'

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
export { Variant }
