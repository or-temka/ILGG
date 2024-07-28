import { ReactComponent as HumanSVG } from 'assets/svgs/human.svg'
import { ReactComponent as GlassesSVG } from 'assets/svgs/glasses.svg'
import { ReactComponent as PhoneSVG } from 'assets/svgs/phone.svg'
import { ReactComponent as PcSVG } from 'assets/svgs/pc.svg'
import { CategoriesProps } from './interfaces'
import { IconTextIslet } from 'components'
import style from './Categories.module.scss'

function Categories({ classNames }: CategoriesProps) {
  return (
    <div className={[style.categories, classNames?.wrapper].join(' ')}>
      <div className={[style.categories__header, classNames?.header].join(' ')}>
        <span className={style.categories__label}>Категории</span>
      </div>
      <div
        className={[style.categories__content, classNames?.content].join(' ')}
      >
        <IconTextIslet
          text="Для одного игрока"
          svgComponent={<HumanSVG />}
          onClick={() => {}}
          classNames={{
            iconContainer: style.categories__textIsletIconContainer,
          }}
        />
        <IconTextIslet
          text="Вечеринка"
          svgComponent={<GlassesSVG />}
          onClick={() => {}}
          classNames={{
            iconContainer: style.categories__textIsletIconContainer,
          }}
        />
        <IconTextIslet
          text="Для телефона"
          svgComponent={<PhoneSVG />}
          onClick={() => {}}
          classNames={{
            iconContainer: style.categories__textIsletIconContainer,
          }}
        />
        <IconTextIslet
          text="Для компьютера"
          svgComponent={<PcSVG />}
          onClick={() => {}}
          classNames={{
            iconContainer: style.categories__textIsletIconContainer,
          }}
        />
      </div>
    </div>
  )
}

export default Categories
