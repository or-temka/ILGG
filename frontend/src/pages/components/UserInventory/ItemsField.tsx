import styles from './ItemsField.module.scss'

interface ItemsFieldProps {
  classNames?: {
    wrapper?: string
  }
}

function ItemsField({ classNames }: ItemsFieldProps) {
  return (
    <section
      className={[styles.items, classNames?.wrapper].join(' ')}
    ></section>
  )
}

export default ItemsField
