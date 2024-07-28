import { Button, buttonVariant } from 'components'
import { ItemsFieldProps } from './interfaces'
import styles from './ItemsField.module.scss'

function ItemsField({ classNames }: ItemsFieldProps) {
  return (
    <section className={[styles.items, classNames?.wrapper].join(' ')}>
      <div className={styles.items__itemsBtns}>
        <button className={styles.item}>
          <img
            src={require('../../../../../assets/images/applications/find-number/items/1.png')}
            alt="Название предмета"
            className={styles.item__img}
          />
        </button>
        <button className={styles.item}>
          <img
            src={require('../../../../../assets/images/applications/find-number/items/1.png')}
            alt="Название предмета"
            className={styles.item__img}
          />
        </button>
        <button className={styles.item}>
          <img
            src={require('../../../../../assets/images/applications/find-number/items/1.png')}
            alt="Название предмета"
            className={styles.item__img}
          />
        </button>
        <button className={styles.item}>
          <img
            src={require('../../../../../assets/images/applications/find-number/items/1.png')}
            alt="Название предмета"
            className={styles.item__img}
          />
        </button>
        <button className={styles.item}>
          <img
            src={require('../../../../../assets/images/applications/find-number/items/1.png')}
            alt="Название предмета"
            className={styles.item__img}
          />
        </button>
        <button className={styles.item}>
          <img
            src={require('../../../../../assets/images/applications/find-number/items/1.png')}
            alt="Название предмета"
            className={styles.item__img}
          />
        </button>
        <button className={styles.item}>
          <img
            src={require('../../../../../assets/images/applications/find-number/items/1.png')}
            alt="Название предмета"
            className={styles.item__img}
          />
        </button>
        <button className={styles.item}>
          <img
            src={require('../../../../../assets/images/applications/find-number/items/1.png')}
            alt="Название предмета"
            className={styles.item__img}
          />
        </button>
        <button className={styles.item}>
          <img
            src={require('../../../../../assets/images/applications/find-number/items/1.png')}
            alt="Название предмета"
            className={styles.item__img}
          />
        </button>
        <button className={styles.item}>
          <img
            src={require('../../../../../assets/images/applications/find-number/items/1.png')}
            alt="Название предмета"
            className={styles.item__img}
          />
        </button>
      </div>

      <div className={styles.items__pagination}>
        <div className={styles.pagination}>
          <Button
            title="Назад"
            variant={buttonVariant.light}
            className={[styles.pagination__btn].join(' ')}
          />
          <span className={styles.pagination__pageText}>
            <span className={styles.pagination__nowPageNum}>1</span> / 12
          </span>
          <Button
            title="Далее"
            variant={buttonVariant.light}
            className={[styles.pagination__btn].join(' ')}
          />
        </div>
      </div>
    </section>
  )
}

export default ItemsField
