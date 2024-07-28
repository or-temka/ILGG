import { useEffect, useState } from 'react'

import styles from './ShowUploadedImage.module.scss'
import { ShowUploadedImageProps } from './interfaces'

function ShowUploadedImage({ image }: ShowUploadedImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image)
      setImageUrl(url)

      return () => URL.revokeObjectURL(url)
    }
  }, [image])

  if (!imageUrl) {
    return <></>
  }

  return (
    <section className={styles.image}>
      <div className={[styles.image__card, styles.image__bigCard].join(' ')}>
        <img
          src={imageUrl}
          alt="Ваш загруженный аватар"
          className={[styles.image__image, styles.image__bigImage].join(' ')}
        />
      </div>
      <div className={[styles.image__card, styles.image__smallCard].join(' ')}>
        <img
          src={imageUrl}
          alt="Ваш загруженный аватар"
          className={[styles.image__image, styles.image__smallImage].join(' ')}
        />
      </div>
    </section>
  )
}

export default ShowUploadedImage
