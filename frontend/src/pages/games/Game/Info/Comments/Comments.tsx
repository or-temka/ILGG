import { Comment, CommentPositivity } from 'components'
import { CommentsProps } from './interfaces'
import style from './Comments.module.scss'

function Comments({ classNames }: CommentsProps) {
  return (
    <div className={[style.comments, classNames?.wrapper].join(' ')}>
      <div className={[style.comments__header, classNames?.header].join(' ')}>
        <h3 className={style.comments__label}>Комментарии</h3>
      </div>
      <div className={[style.comments__content, classNames?.content].join(' ')}>
        <Comment
          commentData={{ date: '14.03.2002', text: 'Привет' }}
          userAuthor={{
            _id: 1,
            login: 'sversys',
            name: 'Приора',
            imgName: 'profileImage.jpg',
            isOnline: true,
            avatar: null,
          }}
          headerChildren={<CommentPositivity positive={true} />}
          classNames={{
            wrapper: classNames?.comment?.wrapper,
            content: classNames?.comment?.content,
          }}
        />
        <Comment
          commentData={{
            date: '08.01.2005',
            text: '---{Сюжет}---☐ Это заменит тебе жизнь☐ Запоминающийся☐ Интересный☑ Не скучный☐ Лучше иди поспи☐ Сюжет?---{Графика}---☐ Реальность выглядит хуже☐ Сочная☐ Хорошая☑ Приемлемо☐ Рисовка☐ Пиксельная☐ Плохая☐ Там что-то есть?☐ Опасно для глаз!---{Геймплей}---☐ Этим можно заниматься вечно☐ Интересен☑ Просто геймплей☐ Ну такое☐ Лучше просто сидеть на месте☐ Похоже разрабы забыли, что делали игру...---{Аудио}---☐ Экстаз☐ Очень хороша☐ Хороша☑ Сойдет☐ Ваш голос звучит лучше☐ Играй без звука!---{Динамика}---☐ ЧТО ЗДЕСЬ ПРОИСХОДИТ?!☐ Очень динамично☐ Интенсивно☑ Умеренно☐ Спокойно☐ Можно даже заснуть☐ Может она просто зависла?---{Сложность}---☐ Продайте душу сатане☑ Это будет тяжелый путь☐ Просто научиться / стать мастером тяжело☐ Средне☐ Иногда нужно будет играть двумя руками☐ Press "X" to win---{Аудитория}---☐ Новорожденные☐ Дети☐ Взрослые☐ Люди☑ Точно НЕ люди!---{Требования к ПК}---☐ Ждите квантовый компьютер☐ Мощный☑ Нормальный☐ Первый компьютер пойдет☐ Калькулятор сойдет☐ Она запуститься, даже если вы просто подключите электричество!---{Прокачка}---☐ За одну жизнь не справишься☐ Переизбыток гринда☐ Иногда можно заскучать☐ Это просто игровой процесс☐ Только если вы хотите стать показушником☑ Тут нечего прокачивать...---{Время игры}---☐ Бесконечность не предел!☐ Довольно длинная☐ Умеренная☑ Средняя☐ Короткая☐ Вы не успеете моргнуть---{Цена}---☐ Тебе некуда девать деньги?☐ Не стоит трат☑ Можно подождать скидки☐ Цена оправдывает ожидания☐ Бесплатна!---{Баги}---☑ ОСТОРОЖНО! ЗАПОВЕДНИК!☐ Могут раздражать☐ Иногда попадаются☐ Ты их видел?☐ Тут просто нечему баговать...',
          }}
          userAuthor={{
            _id: 1,
            login: 'sversys',
            name: 'Приора2',
            imgName: 'profileImage.jpg',
            isOnline: false,
            avatar: null,
          }}
          headerChildren={<CommentPositivity positive={false} />}
          classNames={{
            wrapper: classNames?.comment?.wrapper,
            content: classNames?.comment?.content,
          }}
        />
      </div>
    </div>
  )
}

export default Comments
