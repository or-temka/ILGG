import { Control, Controller, FieldErrors } from 'react-hook-form'

import styles from './fieldset.module.scss'
import Select from 'components/UI/inputs/Select/Select'
import { IMyUserPrivacy } from 'models/myUser/IMyUserPrivacy'
import { PrivacySettingsForm } from '../interfaces'

interface AppsFieldsetProps {
  control: Control<PrivacySettingsForm, any>
  errors: FieldErrors<PrivacySettingsForm>
}

function AppsFieldset({ control, errors }: AppsFieldsetProps) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.fieldset__legend}>Приложения:</legend>
      <div className={styles.fieldset__content}>
        <span>Информация о моих приложениях доступна:</span>
        <Controller
          name="games.availableToView"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<IMyUserPrivacy['games']['availableToView']>
              options={[
                { value: 'all', label: 'Всем' },
                { value: 'friends', label: 'мне и моим друзьям' },
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
        <span>Мои достижения из приложений доступны для просмотра:</span>
        <Controller
          name="games.availableToViewAchievement"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<IMyUserPrivacy['games']['availableToViewAchievement']>
              options={[
                { value: 'all', label: 'Всем' },
                { value: 'friends', label: 'мне и моим друзьям' },
                { value: 'onlyMe', label: 'Только мне' },
              ]}
              errorText={errors.games?.availableToViewAchievement?.message}
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

export default AppsFieldset
