import { Controller } from 'react-hook-form'

import styles from './fieldset.module.scss'
import Select from 'components/UI/inputs/Select/Select'
import { IMyUserPrivacy } from 'models/myUser/IMyUserPrivacy'
import { AppsFieldsetProps } from './interfaces'

function MessagesFieldset({ control, errors }: AppsFieldsetProps) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.fieldset__legend}>Связь со мной:</legend>
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
              errorText={errors.messages?.sendingAvailable?.message}
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>

      <div className={styles.fieldset__content}>
        <span>Мне могут присылать подарки:</span>
        <Controller
          name="messages.presentSendingAvailable"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<IMyUserPrivacy['messages']['presentSendingAvailable']>
              options={[
                { value: 'all', label: 'Все' },
                { value: 'friends', label: 'Только друзья' },
                { value: 'nobody', label: 'Никто' },
              ]}
              errorText={errors.messages?.presentSendingAvailable?.message}
              value={field.value || 'default'}
              onChangeValue={field.onChange}
              hideDefault
            />
          )}
        />
      </div>

      <div className={styles.fieldset__content}>
        <span>Приглашать меня в приложение могут:</span>
        <Controller
          name="messages.inviteAppAvailable"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<IMyUserPrivacy['messages']['inviteAppAvailable']>
              options={[
                { value: 'nobody', label: 'Никто' },
                { value: 'friends', label: 'Только друзья' },
              ]}
              errorText={errors.messages?.inviteAppAvailable?.message}
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
