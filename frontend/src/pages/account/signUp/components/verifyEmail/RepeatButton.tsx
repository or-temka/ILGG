import Button, { ButtonVariant } from 'components/UI/buttons/Button'

import styles from './RepeatButton.module.scss'
import { useEffect, useState } from 'react'

const timerTime = 60 // seconds

interface RepeatButtonProps {
  onClick: Function
}

function RepeatButton({ onClick }: RepeatButtonProps) {
  const [timeLeft, setTimeLeft] = useState(timerTime)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const onClickHandler = () => {
    onClick()
    setTimeLeft(timerTime)
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)
  }

  return (
    <Button
      title={`Отправить повторно ${
        timeLeft > 0 ? ` через ${timeLeft} с.` : ''
      }`}
      variant={ButtonVariant.light}
      className={styles.modal__confirmEmailCodeBtn}
      onClick={onClickHandler}
      disabled={!!timeLeft}
    />
  )
}

export default RepeatButton
