import { Control, Controller, FieldErrors } from 'react-hook-form'

import styles from './fieldset.module.scss'
import Select from 'components/UI/inputs/Select/Select'
import { IMyUserPrivacy } from 'models/myUser/IMyUserPrivacy'
import { PrivacySettingsForm } from '../interfaces'

interface AppsFieldsetProps {
  control: Control<PrivacySettingsForm, any>
  errors: FieldErrors<PrivacySettingsForm>
}

function MessagesFieldset({ control, errors }: AppsFieldsetProps) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.fieldset__legend}>Сообщения:</legend>
      <div className={styles.fieldset__content}>
        <span>Мне могут писать личные сообщения:</span>
        <Controller
          name="messages.sendingAvailable"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<IMyUserPrivacy['messages']['sendingAvailable']>
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

export default MessagesFieldset
