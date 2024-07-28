import { Button } from 'components'
import { ItemInfoProps } from './interfaces'
import styles from './ItemInfo.module.scss'

function ItemInfo({ classNames }: ItemInfoProps) {
  return (
    <section className={[styles.item, classNames?.wrapper].join(' ')}>
      <header className={styles.item__imgContainer}>
        <img
          src={require('assets/images/applications/find-number/items/1.png')}
          alt="Изображение '[название предмета]'"
          className={styles.item__img}
        />
      </header>
      <main className={styles.item__main}>
        <div className={styles.item__about}>
          <h3 className={styles.item__itemName}>
            Название какого-то очень интересного предмета
          </h3>
          <p className={styles.item__aboutItemText}>
            Возможно, это очень длинное описание какого-то супер-интересного
            предмета для определенной игры. Этот предмет даже можно будет
            продать или обменять, а также использоватьв игре.
          </p>
          <p className={styles.item__itemTags}>
            Теги предмета: Носок, Пасхальный носок, Пара носков, Для игры года,
            Подарочный носок, Ещё очень интересный тег, А этот тег даже
            интересней прошлого, Жаль, Очень хороший тег для такого времени
          </p>
        </div>
        <div className={styles.item__manage}>
          <Button
            title="Продать"
            className={[
              styles.item__manageBtn,
              styles.item__manageBtn_buy,
            ].join(' ')}
          />
          <Button
            title="Подарить"
            className={[
              styles.item__manageBtn,
              styles.item__manageBtn_sendGift,
            ].join(' ')}
          />
        </div>
      </main>
    </section>
  )
}

export default ItemInfo
