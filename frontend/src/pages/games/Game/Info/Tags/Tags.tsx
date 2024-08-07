import { TextIslet } from 'components'
import { TagsProps } from './interfaces'
import { application } from 'models'
import style from './Tags.module.scss'

const tags: application.AppTheme[] = [
  { _id: 1, name: 'игра на выживание' },
  { _id: 2, name: 'хоррор' },
  { _id: 3, name: 'один игрок' },
  { _id: 4, name: 'вечеринка' },
  { _id: 5, name: 'любительское' },
  { _id: 6, name: 'новелла' },
  { _id: 7, name: 'для большой компании' },
  { _id: 8, name: 'смешное' },
  { _id: 9, name: 'страшное' },
  { _id: 10, name: 'стратегия' },
]

function Tags({ classNames }: TagsProps) {
  return (
    <div className={[style.tags, classNames?.wrapper].join(' ')}>
      <div className={[style.tags__header, classNames?.header].join(' ')}>
        <span className={style.tags__label}>Теги</span>
      </div>
      <div className={[style.tags__content, classNames?.content].join(' ')}>
        {tags.map((tag) => (
          <TextIslet
            key={tag._id}
            onClick={() => {}}
            classNames={{ text: classNames?.textIslet }}
          >
            {tag.name}
          </TextIslet>
        ))}
      </div>
    </div>
  )
}

export default Tags
