import styles from '../CardImageText/CardImageText.module.scss'

function CardImageTextSkeleton() {
  return <div className={[styles.card, 'pulse'].join(' ')}></div>
}

export { CardImageTextSkeleton }
