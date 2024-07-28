import { DescriptionList } from 'components'
import { MinSystemRequirementsProps } from './interfaces'
import styles from './MinSystemRequirements.module.scss'

const minSysReq = {
  windows: [
    {
      term: 'Поддержка браузеров',
      definition: [
        'Chrome (старше версии 9.0)',
        'Firefox (старше версии 14.1)',
        'Opera (старше версии 5.5)',
        'YandexBrowser (старше версии 23.9)',
        'Safari (старше версии 4.0)',
      ],
    },
    {
      term: 'Операционная система',
      definition: 'Windows 7',
    },
    {
      term: 'Процессор',
      definition: 'Intel Core i3 10400f',
    },
    {
      term: 'Оперативная память',
      definition: '8gb',
    },
    {
      term: 'Видеокарта',
      definition: 'GTX 980',
    },
  ],
  android: [
    {
      term: 'Поддержка браузеров',
      definition: [
        'Chrome (старше версии 9.0)',
        'Firefox (старше версии 14.1)',
        'Opera (старше версии 5.5)',
        'YandexBrowser (старше версии 23.9)',
        'Safari (старше версии 4.0)',
      ],
    },
  ],
  iOS: [
    {
      term: 'Поддержка браузеров',
      definition: [
        'Chrome (старше версии 9.0)',
        'Firefox (старше версии 14.1)',
        'Opera (старше версии 5.5)',
        'YandexBrowser (старше версии 23.9)',
        'Safari (старше версии 4.0)',
      ],
    },
  ],
}

function MinSystemRequirements({ classNames }: MinSystemRequirementsProps) {
  return (
    <div className={[styles.requirements, classNames?.wrapper].join(' ')}>
      <div
        className={[styles.requirements__header, classNames?.header].join(' ')}
      >
        <h3 className={styles.requirements__label}>
          Минимальные системные требования
        </h3>
      </div>
      <div className={[styles.content, classNames?.content].join(' ')}>
        <div
          className={[styles.content__decorLine, classNames?.decorLine].join(
            ' '
          )}
        />

        <div className={[styles.item, classNames?.requirementBlock].join(' ')}>
          <h4 className={styles.item__name}>Windows:</h4>
          <div className={styles.item__content}>
            <DescriptionList
              descs={minSysReq.windows}
              classNames={{
                term: styles.item__termName,
                definition: styles.item__definitionText,
              }}
            />
          </div>
        </div>

        <div
          className={[styles.content__decorLine, classNames?.decorLine].join(
            ' '
          )}
        />

        <div className={[styles.item, classNames?.requirementBlock].join(' ')}>
          <h4 className={styles.item__name}>Android:</h4>
          <div className={styles.item__content}>
            <DescriptionList
              descs={minSysReq.android}
              classNames={{
                term: styles.item__termName,
                definition: styles.item__definitionText,
              }}
            />
          </div>
        </div>

        <div
          className={[styles.content__decorLine, classNames?.decorLine].join(
            ' '
          )}
        />

        <div className={[styles.item, classNames?.requirementBlock].join(' ')}>
          <h4 className={styles.item__name}>iOs:</h4>
          <div className={styles.item__content}>
            <DescriptionList
              descs={minSysReq.iOS}
              classNames={{
                term: styles.item__termName,
                definition: styles.item__definitionText,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinSystemRequirements
