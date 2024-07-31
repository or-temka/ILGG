import { Button, buttonVariant, PopUpContainer } from 'components'
import { PopUpConfirmProps } from './interfaces'
import styles from './PopUpConfirm.module.scss'

function PopUpConfirm({
  children,
  headerText,
  classNames,
  onClose,
  onConfirm,
  ...rest
}: PopUpConfirmProps) {
  return (
    <PopUpContainer
      {...rest}
      onClose={onClose}
      headerText={headerText || 'Подтверждение'}
      classNames={{
        contentClassName: [styles.popUp, classNames?.contentClassName].join(
          ' '
        ),
      }}
    >
      <div
        className={[styles.popUp__textContent, classNames?.textContent].join(
          ' '
        )}
      >
        {children}
      </div>
      <div className={[styles.popUp__buttons, classNames?.buttons].join(' ')}>
        <Button title="Подтвердить" variant={buttonVariant.primary} onClick={onConfirm} />
        <Button
          title="Отмена"
          variant={buttonVariant.light}
          onClick={onClose}
        />
      </div>
    </PopUpContainer>
  )
}

export { PopUpConfirm }
