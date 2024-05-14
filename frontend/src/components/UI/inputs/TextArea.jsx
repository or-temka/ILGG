import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './TextArea.module.scss'

function TextArea({
  placeholder = '',
  type = 'simple', // types: simple, light
  label = '',
  errorText = '',
  value = '',
  cols = '45',
  rows = '5',
  onChange = () => {},
  onClick = () => {},
  className = '',
  wrapperClassName = '',
  ...params
}) {
  const htmlIdRef = useRef(uuidv4())

  return (
    <div {...params} className={[styles.textArea, wrapperClassName].join(' ')}>
      {label && (
        <label htmlFor={htmlIdRef.current} className={styles.textArea__label}>
          {label}
        </label>
      )}
      <textarea
        id={htmlIdRef.current}
        cols={cols}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        className={[
          styles.textArea__input,
          type === 'simple'
            ? styles.textArea__input_simple
            : styles.textArea__input_light,
          errorText ? styles.textArea__input_error : '',
          className,
        ].join(' ')}
      ></textarea>
      {errorText && (
        <span className={['small-text', styles.textArea__errorText].join(' ')}>
          {errorText}
        </span>
      )}
    </div>
  )
}

export default TextArea
