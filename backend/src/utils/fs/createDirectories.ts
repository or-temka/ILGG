import fs from 'fs'

import { serverError } from '../../utils'
import { UPLOADS_DIR } from '../../variables'

export const createDirectories = (
  directories: string[],
  prefix?: string,
  recursive = true
) => {
  directories.forEach((dir) => {
    fs.mkdir(`${UPLOADS_DIR}/${prefix}${dir}`, { recursive }, (err) => {
      if (err) serverError(`Ошибка создания директории ${dir}: ${err}`)
    })
  })
}
