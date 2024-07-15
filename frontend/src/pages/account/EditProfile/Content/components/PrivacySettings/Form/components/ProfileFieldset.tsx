import { Control, Controller, FieldErrors } from 'react-hook-form'

import styles from './fieldset.module.scss'
import Select from 'components/UI/inputs/Select/Select'
import { IMyUserPrivacy } from 'models/myUser/IMyUserPrivacy'
import { PrivacySettingsForm } from '../interfaces'

interface AppsFieldsetProps {
  control: Control<PrivacySettingsForm, any>
  errors: FieldErrors<PrivacySettingsForm>
}

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
            <Select<IMyUserPrivacy['profile']['availableToViewMainInfo']>
              options={[
                { value: 'all', label: 'Всем' },
                { value: 'friends', label: 'Только мне и моим друзьям' },
                { value: 'onlyMe', label: 'Только мне' },
              ]}
              errorText={errors.games?.availableToView?.message}
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>

      <div className={styles.fieldset__content}>
        <span>В поисковике меня могут найти:</span>
        <Controller
          name="profile.availableToSearch"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<IMyUserPrivacy['profile']['availableToSearch']>
              options={[
                { value: 'all', label: 'Все' },
                { value: 'friends', label: 'Только друзья' },
              ]}
              errorText={errors.games?.availableToView?.message}
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
