'use client'

import { useEffect, useRef, useState } from 'react'
import CarouselItem from '../../atoms/youtubePreview/CarouselItem'
import CarouselLoading from '../../atoms/youtubePreview/CarouselLoading'
import { useInfinitePlaylist } from '@/app/api/getYoutubePlayList'

// Carouselを羅列するBox
const CarouselBox = () => {
  // データ取得のinfiniteQuery
  const { data, isLoading, fetchNextPage, isFetching, hasNextPage, error } =
    useInfinitePlaylist()

  const ref = useRef<HTMLDivElement>(null)
  const [isReadyFetch, setIsReadyFetch] = useState(false)

  useEffect(() => {
    if (isReadyFetch && fetchNextPage && !isFetching && hasNextPage) {
      fetchNextPage()
      setIsReadyFetch(false)
    }
  }, [isReadyFetch, fetchNextPage, isFetching, hasNextPage])

  // scroll状態を監視
  useEffect(() => {
    const scrollContainer = ref.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft
      const scrollWidth = scrollContainer.scrollWidth
      const width = scrollContainer.clientWidth
      const scrollRight = width + scrollLeft

      // scroll状態の確認Log
      // console.log('scrollRight', scrollRight)
      // console.log('scrollWidth', scrollWidth)

      // 右端に到達したらfetchを実行
      const isAtEnd = Math.abs(scrollWidth - scrollRight) < 10
      setIsReadyFetch(isAtEnd)
    }

    if (!isLoading && !isFetching && data) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [ref, isLoading, isFetching, data])

  if (error) {
    alert('error get youtube')
  }

  return (
    <>
      {isLoading ? (
        <CarouselLoading />
      ) : (
        <div className="w-full h-[220px] border-red-600 border-2 bg-red-600 rounded-md ">
          <div className="w-full h-full border-black border-2 bg-slate-800 rounded-md ">
            <div
              ref={ref}
              className="h-full p-1 flex flex-nowrap overflow-hidden gap-2 items-center overflow-x-auto scrollbar-hide"
            >
              {data &&
                data.pages.map((page) =>
                  page.items.map((item) => (
                    <CarouselItem
                      key={item.id}
                      imageSrc={item.snippet.thumbnails.medium.url}
                    />
                  )),
                )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CarouselBox
