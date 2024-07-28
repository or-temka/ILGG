import { Controller } from 'react-hook-form'

import styles from './fieldset.module.scss'
import Select from 'components/UI/inputs/Select/Select'
import { AppsFieldsetProps } from './interfaces'
import { myUser } from 'models'

function ProfileFieldset({ control, errors }: AppsFieldsetProps) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.fieldset__legend}>Профиль:</legend>
      <div className={styles.fieldset__content}>
        <span>Основная информация моего профиля видна:</span>
        <Controller
          name="profile.availableToViewMainInfo"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<myUser.IMyUserPrivacy['profile']['availableToViewMainInfo']>
              options={[
                { value: 'all', label: 'Всем' },
                { value: 'friends', label: 'Только мне и моим друзьям' },
                { value: 'onlyMe', label: 'Только мне' },
              ]}
              errorText={errors.profile?.availableToViewMainInfo?.message}
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>

      <div className={styles.fieldset__content}>
        <span>В меню "поиск" меня могут найти:</span>
        <Controller
          name="profile.availableToSearch"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<myUser.IMyUserPrivacy['profile']['availableToSearch']>
              options={[
                { value: 'all', label: 'Все' },
                { value: 'friends', label: 'Только друзья' },
              ]}
              errorText={errors.profile?.availableToSearch?.message}
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>

      <div className={styles.fieldset__content}>
        <span>Мое настоящее имя могут видеть:</span>
        <Controller
          name="profile.availableToViewRealName"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<myUser.IMyUserPrivacy['profile']['availableToViewRealName']>
              options={[
                { value: 'all', label: 'Все' },
                { value: 'friends', label: 'Я и мои друзья' },
                { value: 'onlyMe', label: 'Только я' },
              ]}
              errorText={errors.profile?.availableToViewRealName?.message}
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>

      <div className={styles.fieldset__content}>
        <span>Комментарии в моем профиле могут оставлять:</span>
        <Controller
          name="profile.sendCommentInMyProfileAvailable"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<
              myUser.IMyUserPrivacy['profile']['sendCommentInMyProfileAvailable']
            >
              options={[
                { value: 'all', label: 'Все' },
                { value: 'friends', label: 'Я и мои друзья' },
                { value: 'onlyMe', label: 'Только я' },
              ]}
              errorText={
                errors.profile?.sendCommentInMyProfileAvailable?.message
              }
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>

      <div className={styles.fieldset__content}>
        <span>Комментарии в моём профиле могут видеть:</span>
        <Controller
          name="profile.availableToViewCommentsInMyProfile"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<
              myUser.IMyUserPrivacy['profile']['availableToViewCommentsInMyProfile']
            >
              options={[
                { value: 'all', label: 'Все' },
                { value: 'friends', label: 'Я и мои друзья' },
                { value: 'onlyMe', label: 'Только я' },
              ]}
              errorText={
                errors.profile?.availableToViewCommentsInMyProfile?.message
              }
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>

      <div className={styles.fieldset__content}>
        <span>Моих друзей могут видеть:</span>
        <Controller
          name="profile.availableToViewMyFriends"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<myUser.IMyUserPrivacy['profile']['availableToViewMyFriends']>
              options={[
                { value: 'all', label: 'Все' },
                { value: 'friends', label: 'Я и мои друзья' },
                { value: 'onlyMe', label: 'Только я' },
              ]}
              errorText={errors.profile?.availableToViewMyFriends?.message}
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>

      <div className={styles.fieldset__content}>
        <span>Мой уровень профиля могут видеть:</span>
        <Controller
          name="profile.availableToViewMyProfileLevel"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<myUser.IMyUserPrivacy['profile']['availableToViewMyProfileLevel']>
              options={[
                { value: 'all', label: 'Все' },
                { value: 'friends', label: 'Я и мои друзья' },
                { value: 'onlyMe', label: 'Только я' },
              ]}
              errorText={errors.profile?.availableToViewMyProfileLevel?.message}
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>

      <div className={styles.fieldset__content}>
        <span>Мой статус "в сети" могут видеть:</span>
        <Controller
          name="profile.availableToViewMyOnlineStatus"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<myUser.IMyUserPrivacy['profile']['availableToViewMyOnlineStatus']>
              options={[
                { value: 'all', label: 'Все' },
                { value: 'friends', label: 'Я и мои друзья' },
                { value: 'onlyMe', label: 'Только я' },
              ]}
              errorText={errors.profile?.availableToViewMyOnlineStatus?.message}
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>
    </fieldset>
  )
}

export default ProfileFieldset
