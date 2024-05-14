import styles from './HeaderSearchInput.module.scss'

function HeaderSearchInput({
  value = '',
  onChange = () => {},
  onClick = () => {},
  className = '',
  ...params
}) {
  return (
    <input
      type="text"
      {...params}
      value={value}
      onClick={onClick}
      onChange={onChange}
      placeholder="Поиск"
      className={[styles.input, className].join(' ')}
    />
  )
}

export default HeaderSearchInput
