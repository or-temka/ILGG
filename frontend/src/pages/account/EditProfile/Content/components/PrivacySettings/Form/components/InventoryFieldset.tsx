import { Controller } from 'react-hook-form'

import { AppsFieldsetProps } from './interfaces'
import { myUser } from 'models'
import { Select } from 'components'
import styles from './fieldset.module.scss'

function InventoryFieldset({ control, errors }: AppsFieldsetProps) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.fieldset__legend}>Инвентарь:</legend>
      <div className={styles.fieldset__content}>
        <span>Мой инвентарь доступен для просмотра:</span>
        <Controller
          name="inventory.availableToView"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select<myUser.IMyUserPrivacy['inventory']['availableToView']>
              options={[
                { value: 'all', label: 'Всем' },
                { value: 'friends', label: 'Мне и моим друзьям' },
                { value: 'onlyMe', label: 'Только мне' },
              ]}
              errorText={errors.inventory?.availableToView?.message}
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

export default InventoryFieldset
