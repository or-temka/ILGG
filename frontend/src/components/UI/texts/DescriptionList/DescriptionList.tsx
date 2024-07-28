import { descListTermVariant } from './enums'
import { DescriptionListProps } from './interfaces'
import styles from './DescriptionList.module.scss'

function DescriptionList({ descs, classNames }: DescriptionListProps) {
  return (
    <dl className={[styles.desc, classNames?.list].join(' ')}>
      {descs.map((desc, index) => (
        <div
          key={index}
          className={[
            styles.desc__item,
            Array.isArray(desc.definition)
              ? styles.desc__item_definitionList
              : '',
            classNames?.listItem,
          ].join(' ')}
        >
          <dt
            className={[
              styles.desc__term,
              desc.termVariant ? desc.termVariant : descListTermVariant.light,
              classNames?.term,
            ].join(' ')}
          >
            {desc.term}
          </dt>
          <dd
            className={[
              styles.desc__definition,
              desc.onClickDefinition ? styles.desc__definition_link : '',
              classNames?.definition,
            ].join(' ')}
            onClick={(e) => desc.onClickDefinition && desc.onClickDefinition(e)}
          >
            {!Array.isArray(desc.definition) ? (
              desc.definition
            ) : (
              <ul className={styles.desc__definitionList}>
                {desc.definition.map((definition, index) => (
                  <li key={index} className={styles.desc__definitionListItem}>
                    {definition}
                  </li>
                ))}
              </ul>
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export { DescriptionList, descListTermVariant }
