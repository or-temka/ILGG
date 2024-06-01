import styles from './ItemInfo.module.scss'

interface ItemInfoProps {
  classNames?: {
    wrapper?: string
  }
}

function ItemInfo({ classNames }: ItemInfoProps) {
  return (
    <section className={[styles.item, classNames?.wrapper].join(' ')}></section>
  )
}

export default ItemInfo
