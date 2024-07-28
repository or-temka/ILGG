import { useState } from 'react'

import InputWithBtnIcon from '../InputWithBtnIcon/InputWithBtnIcon'
import { ReactComponent as ShowPasswordSVG } from 'assets/svgs/eye.svg'
import { InputPasswordProps } from './interfaces'

function InputPassword({ showPass = false, ...rest }: InputPasswordProps) {
  const [isShowPass, setIsShowPass] = useState(false)

  return (
    <InputWithBtnIcon
      type={isShowPass ? 'text' : 'password'}
      svgComponent={<ShowPasswordSVG />}
      onClickBtnIcon={() => setIsShowPass((prev) => !prev)}
      {...rest}
    />
  )
}

export default InputPassword
