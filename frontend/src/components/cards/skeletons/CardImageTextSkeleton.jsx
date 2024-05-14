import styles from '../CardImageText.module.scss'

function CardImageTextSkeleton() {
  return <div className={[styles.card, 'pulse'].join(' ')}></div>
}

export default CardImageTextSkeleton
