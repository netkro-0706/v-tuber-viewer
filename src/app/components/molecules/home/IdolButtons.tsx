'use client'

import { useRouter } from 'next/navigation'
import ButtonImage from '../../atoms/_common/ButtonImage'
import MOVIELISTID from '@/app/constants/movieList'

const IdolButtons = () => {
  const router = useRouter()

  const onEnterPreview = (id: string) => {
    router.push(`/youtubePreview?movieListId=${id}`)
  }

  const imgWidth = 350
  const imgHeight = 350

  return (
    <div className="grid gap-x-24 gap-y-12 grid-cols-3 justify-items-center pl-16 pr-16">
      <ButtonImage
        src={'/home/ine.png'}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        onClick={() => onEnterPreview(MOVIELISTID.INE)}
      />
      <ButtonImage
        src={'/home/jingburger.png'}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        onClick={() => onEnterPreview(MOVIELISTID.JINGBURGER)}
      />
      <ButtonImage
        src={'/home/lilpa.png'}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        onClick={() => onEnterPreview(MOVIELISTID.LILPA)}
      />
      <ButtonImage
        src={'/home/jururu.png'}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        onClick={() => onEnterPreview(MOVIELISTID.JURURU)}
      />
      <ButtonImage
        src={'/home/gosegu.png'}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        onClick={() => onEnterPreview(MOVIELISTID.GOSEGU)}
      />
      <ButtonImage
        src={'/home/viichan.png'}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        onClick={() => onEnterPreview(MOVIELISTID.VIICHAN)}
      />
    </div>
  )
}

export default IdolButtons
