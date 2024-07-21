import { useState } from 'react'

import InputWithBtnIcon, {
  InputWithBtnIconProps,
} from '../InputWithBtnIcon/InputWithBtnIcon'
import { ReactComponent as ShowPasswordSVG } from 'assets/svgs/eye.svg'

interface InputPasswordProps extends InputWithBtnIconProps {
  showPass?: boolean
  [key: string]: any
}

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
