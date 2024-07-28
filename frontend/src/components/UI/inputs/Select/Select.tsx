import { ChangeEvent, ChangeEventHandler } from 'react'

import { SelectProps } from './interfaces'
import styles from './Select.module.scss'

function Select<T>({
  options = [],
  placeholder = 'Выберите...',
  errorText = '',
  defaultValue = 'default',
  disabledNotEntered = false,
  notEnteredColor = 'var(--text-color)',
  onChange = () => {},
  className = '',
  containerClassName = '',
  value,
  hideDefault = false,
  onChangeValue,
  register,
  ...restProps
}: SelectProps<T>) {
  const onChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const value: string = e.target.value as string
    onChange(value)
    onChangeValue && onChangeValue(value)
  }

  return (
    <div className={[styles.select, containerClassName].join(' ')}>
      <select
        onChange={onChangeHandler}
        className={[
          styles.select__select,
          className,
          errorText && styles.select__select_error,
        ].join(' ')}
        value={value}
        {...register}
        {...restProps}
      >
        {!hideDefault && (
          <option
            value="default"
            className={styles.select__option}
            disabled={disabledNotEntered}
            style={{ color: notEnteredColor }}
          >
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option
            key={option.value as string}
            value={option.value as string}
            className={styles.select__option}
          >
            {option.label}
          </option>
        ))}
      </select>
      {errorText && (
        <span className={['small-text', styles.select__errorText].join(' ')}>
          {errorText}
        </span>
      )}
    </div>
  )
}

export { Select }
