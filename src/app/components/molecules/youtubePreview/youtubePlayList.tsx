'use client'

import { usePlaylist } from '@/app/api/getYoutubePlayList'
import CarouselBox from '../../atoms/youtubePreview/CarouselBox'
import { useEffect } from 'react'

export default function YoutubePlayList() {
  const { data, isLoading, error } = usePlaylist()

  useEffect(() => {
    console.log('aaaa', isLoading)
  }, [isLoading])

  return data && <CarouselBox data={data} isLoading={isLoading} error={error} />
}
