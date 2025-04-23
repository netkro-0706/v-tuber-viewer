'use client'

import { useEffect, useRef } from 'react'
import CarouselItem from './CarouselItem'
import CarouselLoading from './CarouselLoading'
import { Youtube } from '@/app/types/youtubeTypes'

interface Props {
  data: Youtube
  isLoading: boolean
  error: Error | null
}

// Carouselを羅列するBox
const CarouselBox = ({ data, isLoading, error }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const scrollContainer = ref.current
  if (scrollContainer) {
    const scrollLeft = scrollContainer.scrollLeft
    const scrollWidth = scrollContainer.scrollWidth

    console.log('left', scrollLeft)
    console.log('width', scrollWidth)
  }
  console.log('scroll', scrollContainer)

  useEffect(() => {
    if (data) console.log('data', data)
  }, [data])

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
                data.items.map((item) => {
                  return (
                    <CarouselItem
                      key={item.id}
                      imageSrc={item.snippet.thumbnails.medium.url}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CarouselBox
