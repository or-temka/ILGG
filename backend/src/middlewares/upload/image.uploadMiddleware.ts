import multer from 'multer'

const types = ['image/png', 'image/jpeg', 'image/jpg']

const storage = multer.diskStorage({
  destination(req: any, file, callback) {
    const userId = req.user.id
    const uploadPath = `uploads/users/${userId}/profile/`
    callback(null, uploadPath)
  },
  filename(req, file, callback) {
    callback(null, `pi-${Date.now()}-${file.originalname}`)
  },
})

const fileFilter = (
  req: unknown,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback
) => {
  if (types.includes(file.mimetype)) {
    callback(null, true)
  } else {
    callback(null, false)
  }
}

export default multer({ storage, fileFilter })
