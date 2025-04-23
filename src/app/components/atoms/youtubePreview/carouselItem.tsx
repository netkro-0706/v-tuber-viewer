'use client'

import ButtonImage from '../_common/ButtonImage'

interface Props {
  imageSrc: string
}

// CarouselでImageを表示するItem
const CarouselItem = ({ imageSrc }: Props) => {
  const OnClickMovie = () => {
    console.log('clicked')
  }

  return (
    <div className="itemWapper min-w-[320px] h-[180px]">
      <div className="outerBorder w-full h-full border-4 border-yellow-300 bg-yellow-300 rounded-[16px]">
        <div className="innerBorder relative w-full h-full border-[6px] border-black rounded-[12px] bg-black">
          <ButtonImage
            className="rounded-[6px]"
            src={imageSrc}
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
