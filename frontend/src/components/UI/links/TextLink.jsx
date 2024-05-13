import { Link } from 'react-router-dom'
import styles from './TextLink.module.scss'

function TextLink({
  children,
  type = 'simple', // types: simple, text, bold
  text = '',
  to = '',
  className = '',
  ...params
}) {
  return (
    <Link
      {...params}
      className={[
        styles.link,
        type === 'simple'
          ? styles.link_simple
          : type === 'text'
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
