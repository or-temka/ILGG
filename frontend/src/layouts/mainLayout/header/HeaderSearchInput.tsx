import styles from './HeaderSearchInput.module.scss'
import { HeaderSearchInputProps } from './interfaces'

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
