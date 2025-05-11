'use client'

import MemberList from '../../atoms/youtubePreview/MemberList'
import CarouselBox from '../../molecules/youtubePreview/CarouselBox'
import PlayerBox from '../../molecules/youtubePreview/PlayerBox'

export default function YoutubePlayList() {
  return (
    <div>
      <MemberList />
      <PlayerBox />
      <CarouselBox />
    </div>
  )
}
