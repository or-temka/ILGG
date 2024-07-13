import { InputHTMLAttributes, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './Checkbox.module.scss'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string

  [key: string]: any
}

function Checkbox({
  label = '',
  checked = false,
  disabled = false,
  className = '',

  ...restProps
}: CheckboxProps) {
  const htmlIdRef = useRef(uuidv4())

  return (
    <div className={[styles.checkbox, className].join(' ')}>
      <div className={['preload', styles.preload].join(' ')} />
      <input
        type="checkbox"
        id={htmlIdRef.current}
        className={[styles.checkbox__input, className].join(' ')}
        {...restProps}
      />
      <label
        htmlFor={htmlIdRef.current}
        className={[styles.checkbox__label, 'paragraph', className].join(' ')}
      >
        {label}
      </label>
    </div>
  )
}

export default Checkbox
