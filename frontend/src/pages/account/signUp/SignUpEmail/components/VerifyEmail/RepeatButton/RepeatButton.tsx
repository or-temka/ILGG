import { useEffect, useState } from 'react'

import { RepeatButtonProps } from './interfaces'
import { Button, buttonVariant } from 'components'
import styles from './RepeatButton.module.scss'

const timerTime = 60 // seconds

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
      variant={buttonVariant.light}
      className={styles.modal__confirmEmailCodeBtn}
      onClick={onClickHandler}
      disabled={!!timeLeft}
    />
  )
}

export default RepeatButton
