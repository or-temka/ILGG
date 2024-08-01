import path from 'path'
import sharp from 'sharp'

export const resizeAvatarImageMiddleware = async (
  req: any,
  res: any,
  next: any
) => {
  if (!req.file) {
    return next()
  }

  const userId = req.user._id
  const uploadPath = `uploads/users/${userId}/profile/avatar`
  const file = req.file
  const filename = file.filename
  const filePath = path.join(uploadPath, filename)
  const imageQuality = {
    png: 9,
    jpg: 100,
  }

  try {
    const mImage = sharp(filePath).resize(200, 200)
    const lImage = sharp(filePath).resize(50, 50)

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
      mImage.jpeg({ quality: imageQuality.jpg })
      lImage.jpeg({ quality: imageQuality.jpg })
    } else if (file.mimetype === 'image/png') {
      mImage.png({ compressionLevel: imageQuality.png })
      lImage.png({ compressionLevel: imageQuality.png })
    }

    await mImage.toFile(path.join(uploadPath, `m-${filename}`))
    await lImage.toFile(path.join(uploadPath, `l-${filename}`))

    next()
  } catch (err) {
    next(err)
  }
}
