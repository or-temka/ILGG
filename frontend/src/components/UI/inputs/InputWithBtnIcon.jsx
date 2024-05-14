import { v4 as uuidv4 } from 'uuid'
import { useRef } from 'react'

import btnStyles from './Input.module.scss'
import styles from './InputWithBtnIcon.module.scss'

function InputWithBtnIcon({
  placeholder = '',
  value = '',
  label = '',
  type = 'simple', // types: simple, light
  errorText = '',
  svgComponent,
  onChange = () => {},
  onClick = () => {},
  className = '',
  wrapperClassName = '',
  ...params
}) {
  const htmlIdRef = useRef(uuidv4())

  return (
    <div
      className={[btnStyles.input, wrapperClassName].join(' ')}
      onClick={onClick}
    >
      {label && (
        <label htmlFor={htmlIdRef.current} className={btnStyles.input__label}>
          {label}
        </label>
      )}
      <div className={styles.input__inputContainer}>
        <input
          {...params}
          id={htmlIdRef.current}
          value={value}
          type="text"
          onChange={onChange}
          placeholder={placeholder}
          className={[
            btnStyles.input__input,
            styles.input__input,
            errorText && btnStyles.input__input_error,
            type === 'light'
              ? btnStyles.input__input_light
              : btnStyles.input__input_simple,
            className,
          ].join(' ')}
        />
        {svgComponent && (
          <div
            className={[
              styles.input__inputBtn,
              type === 'light'
                ? styles.input__inputBtn_light
                : styles.input__inputBtn_simple,
            ].join(' ')}
          >
            {svgComponent}
          </div>
        )}
      </div>

      {errorText && (
        <span className={['small-text', btnStyles.input__errorText].join(' ')}>
          {errorText}
        </span>
      )}
    </div>
  )
}

export default InputWithBtnIcon
