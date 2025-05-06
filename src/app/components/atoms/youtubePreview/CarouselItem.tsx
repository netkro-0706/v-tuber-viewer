'use client'

import { useSetAtom } from 'jotai'
import ButtonImage from '../../atoms/_common/ButtonImage'
import videoAtom from '@/app/store/videoAtom'
import { YoutubeItem } from '@/app/types/youtubeTypes'

interface Props {
  data: YoutubeItem
}

// Carousel에서 image를 표시하는 Item
// CarouselでImageを表示するItem
const CarouselItem = ({ data }: Props) => {
  const setVideoId = useSetAtom(videoAtom)
  const video = data.snippet

  const OnClickMovie = () => {
    setVideoId({
      title: video.title,
      videoId: video.resourceId.videoId,
      videoOwnerTitle: video.videoOwnerChannelTitle,
      videoPublishDate: video.publishedAt,
    })
    console.log('clicked and videoId', video.resourceId.videoId)
  }

  return (
    <div className="itemWapper min-w-[320px] h-[180px]">
      <div className="outerBorder w-full h-full border-4 border-yellow-300 bg-yellow-300 rounded-[16px]">
        <div className="innerBorder relative w-full h-full border-[6px] border-black rounded-[12px] bg-black">
          <ButtonImage
            className="rounded-[6px]"
            src={video.thumbnails.medium.url}
            isFill={true}
            sizes={'320'}
            onClick={OnClickMovie}
          />
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
