import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import btnStyles from '../Input/Input.module.scss'
import styles from './InputWithBtnIcon.module.scss'
import { InputWithBtnIconVariant } from './enums'
import { InputWithBtnIconProps } from './interfaces'

function InputWithBtnIcon({
  label = '',
  variant = InputWithBtnIconVariant.simple,
  errorText = '',
  svgComponent,
  onClickBtnIcon = () => {},
  onClick = () => {},
  className = '',
  wrapperClassName = '',
  register,
  ...restProps
}: InputWithBtnIconProps) {
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
          id={htmlIdRef.current}
          className={[
            btnStyles.input__input,
            styles.input__input,
            errorText && btnStyles.input__input_error,
            variant === 'light'
              ? btnStyles.input__input_light
              : btnStyles.input__input_simple,
            className,
          ].join(' ')}
          {...register}
          {...restProps}
        />
        {svgComponent && (
          <div
            className={[
              styles.input__inputBtn,
              variant === 'light'
                ? styles.input__inputBtn_light
                : styles.input__inputBtn_simple,
            ].join(' ')}
            onClick={(event) => onClickBtnIcon(event.currentTarget.parentNode)}
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
export { InputWithBtnIconVariant }
