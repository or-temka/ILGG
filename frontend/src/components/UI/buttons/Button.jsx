import styles from './Button.module.scss'

function Button({
  title = '',
  type = '', // types: simple, light, primary
  disabled = false,
  className = '',
  onClick = () => {},
  ...params
}) {
  return (
    <button
      {...params}
      disabled={disabled}
      className={[
        styles.button,
        type === 'light'
          ? styles.button_light
          : type === 'primary'
          ? styles.button_primary
          : styles.button_simple,
        disabled && styles.button_disabled,
        className,
      ].join(' ')}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
