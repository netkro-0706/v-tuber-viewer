'use client'

interface Props {
  direction: 'left' | 'right'
  onClick: () => void
}

const CarouselArrow = ({ direction, onClick }: Props) => {
  return (
    <button
      className={`w-7 h-full absolute top-0 bg-gray-500 opacity-60 hover:opacity-90
        ${direction === 'left' ? 'left-0 listMoveLeft' : 'right-0 listMoveRight'}`}
      onClick={onClick}
    >
      {direction === 'left' ? '◀︎' : '▶︎'}
    </button>
  )
}

export default CarouselArrow
