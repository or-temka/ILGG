import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './TextArea.module.scss'
import { Variant } from './enums'
import { TextAreaProps } from './interfaces'

function TextArea({
  variant = Variant.simple,
  label = '',
  errorText = '',
  className = '',
  wrapperClassName = '',
  register,
  ...restProps
}: TextAreaProps) {
  const htmlIdRef = useRef(uuidv4())

  return (
    <div className={[styles.textArea, wrapperClassName].join(' ')}>
      {label && (
        <label htmlFor={htmlIdRef.current} className={styles.textArea__label}>
          {label}
        </label>
      )}
      <textarea
        id={htmlIdRef.current}
        className={[
          styles.textArea__input,
          variant === 'simple'
            ? styles.textArea__input_simple
            : styles.textArea__input_light,
          errorText ? styles.textArea__input_error : '',
          className,
        ].join(' ')}
        {...register}
        {...restProps}
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
export { Variant }
