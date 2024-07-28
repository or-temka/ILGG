import styles from './AboutGameText.module.scss'
import { AboutGameTextProps } from './interfaces'

function AboutGameText({ classNames }: AboutGameTextProps) {
  return (
    <div className={[styles.about, classNames?.wrapper].join(' ')}>
      <div className={[styles.about__header, classNames?.header].join(' ')}>
        <h3 className={styles.about__label}>Об игре</h3>
      </div>
      <div className={[styles.about__content, classNames?.content].join(' ')}>
        <div
          className={[styles.about__textBlock, classNames?.textBlock].join(' ')}
        >
          <h4 className={styles.about__textBlockLabel}>
            Покажите, чего вы стоите!
          </h4>
          <p className={styles.about__paragraph}>
            Откроются ли перед вами врата Вальгаллы? Сейчас вы в Вальхейме —
            10-м мире викингов. Одолейте могучих чудовищ этих земель и добейтесь
            расположения богов! На своем пути вы побываете в самых дальних
            уголках этого мира, от дремучих лесов до высочайших горных вершин.
            Создавайте могущественное оружие, стройте неприступные замки и
            отправляйтесь под парусами драккаров к самому горизонту.
          </p>
        </div>

        <div
          className={[styles.about__textBlock, classNames?.textBlock].join(' ')}
        >
          <h4 className={styles.about__textBlockLabel}>Описание</h4>
          <p className={styles.about__paragraph}>
            Вальхейм — это игра, в которой вам предстоит исследовать огромный
            фэнтезийный мир, пропитанный скандинавской мифологией и культурой
            викингов. Ваше приключение начнется в самом сердце Вальхейма, месте
            довольно спокойном. Но берегитесь, ведь чем дальше вы будете
            продвигаться, тем опаснее будет становиться мир вокруг. К счастью,
            по пути вас будут ждать не только опасности — вы также будете чаще
            находить ценные материалы, которые весьма пригодятся для создания
            смертоносного оружия и крепкой брони. Возводите крепости и заставы
            по всему миру! А со временем постройте несокрушимый драккар и
            отправьтесь покорять бескрайние океаны в поиске чужестранных
            земель... Но постарайтесь не заплыть слишком далеко...
          </p>
        </div>

        <div
          className={[styles.about__textBlock, classNames?.textBlock].join(' ')}
        >
          <h4 className={styles.about__textBlockLabel}>Особенности игры:</h4>
          <ul className={styles.about__list}>
            <li className={styles.about__listItem}>
              Гибкая система строительства домов и базы.
            </li>
            <li className={styles.about__listItem}>
              Интуитивное меню создания предметов (оружия, брони, еды и
              прочего).
            </li>
            <li className={styles.about__listItem}>
              Огромный генерируемый мир.
            </li>
            <li className={styles.about__listItem}>
              Боевая система на основе ударов и блокировок с широким выбором
              разнообразного оружия.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutGameText
