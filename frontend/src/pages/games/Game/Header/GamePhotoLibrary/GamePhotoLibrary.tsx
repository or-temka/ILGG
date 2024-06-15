import styles from './GamePhotoLibrary.module.scss'

function GamePhotoLibrary() {
  return (
    <div className={styles.photos}>
      <img
        src={require('assets/images/applications/find-number/large-poster.jpg')}
        alt="Изображение игры"
        className={styles.photos__photo}
      />
    </div>
  )
}

export default GamePhotoLibrary
