import styles from '../AsideInfo/components/FriendsPanel.module.scss'

function FriendsPanel() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className={styles.panel}>
      <span className={styles.panel__label}>Друзья:</span>

      <div className={styles.panel__friends}>
        {count.map((_, index) => (
          <div
            key={index}
            className={['pulse-light', styles.skeleton__friend].join(' ')}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default FriendsPanel
