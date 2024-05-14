import { ChangeEventHandler, MouseEventHandler } from 'react'
import styles from './HeaderSearchInput.module.scss'

interface HeaderSearchInputProps {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>
  className?: string
}

function HeaderSearchInput({
  value = '',
  onChange = () => {},
  onClick = () => {},
  className = '',
}: HeaderSearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onClick={onClick}
      onChange={onChange}
      placeholder="Поиск"
      className={[styles.input, className].join(' ')}
    />
  )
}

export default HeaderSearchInput
