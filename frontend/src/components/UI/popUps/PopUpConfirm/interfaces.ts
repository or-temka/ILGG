import { PopUpContainerProps } from '../skeletons/PopUpContainer/interfaces'

export interface PopUpConfirmProps extends PopUpContainerProps {
  classNames?: PopUpContainerProps['classNames'] & {
    buttons?: string
    textContent?: string
  }
  onConfirm?: (...args: any[]) => any
}
