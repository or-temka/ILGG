import { AppLanguage } from 'models/application/types/AppLanguage'

import { ReactComponent as TickSVG } from '../../../../../assets/svgs/tick.svg'

import style from './LanguageSupport.module.scss'

const langData: AppLanguage[] = [
  {
    _id: 1,
    name: 'русский',
    support: { interface: true, subtitles: true, voiceover: true },
  },
  {
    _id: 2,
    name: 'английский',
    support: { interface: true, subtitles: false, voiceover: true },
  },
  {
    _id: 3,
    name: 'немецкий',
    support: { interface: false, subtitles: false, voiceover: false },
  },
]

interface LanguageSupportProps {
  classNames?: {
    wrapper?: string
    header?: string
    content?: string
    table?: string
  }
}

function LanguageSupport({ classNames }: LanguageSupportProps) {
  return (
    <div className={[style.info, classNames?.wrapper].join(' ')}>
      <div className={[style.info__header, classNames?.header].join(' ')}>
        <span className={style.info__label}>Поддержка языков</span>
      </div>
      <div className={[style.info__content, classNames?.content].join(' ')}>
        <table className={[style.table, classNames?.table].join(' ')}>
          <thead className={style.table__head}>
            <tr className={[style.table__tr, style.table__tr_head].join(' ')}>
              <th className={style.table__th}></th>
              <th className={style.table__th}>Интерфейс</th>
              <th className={style.table__th}>Озвучка</th>
              <th className={style.table__th}>Субтитры</th>
            </tr>
          </thead>
          <tbody className={style.table__body}>
            {langData.map((lang) => (
              <tr
                key={lang._id}
                className={[style.table__tr, style.table__tr_body].join(' ')}
              >
                <td
                  className={[style.table__td, style.table__td_name].join(' ')}
                >
                  {lang.name}
                </td>
                <td className={style.table__td}>
                  {lang.support.interface ? (
                    <TickSVG />
                  ) : (
                    <span className={style.table__noneLine} />
                  )}
                </td>
                <td className={style.table__td}>
                  {lang.support.voiceover ? (
                    <TickSVG />
                  ) : (
                    <span className={style.table__noneLine} />
                  )}
                </td>
                <td className={style.table__td}>
                  {lang.support.subtitles ? (
                    <TickSVG />
                  ) : (
                    <span className={style.table__noneLine} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LanguageSupport
