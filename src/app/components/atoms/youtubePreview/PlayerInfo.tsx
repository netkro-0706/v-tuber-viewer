import videoAtom from '@/app/store/videoAtom'
import { useAtomValue } from 'jotai'
import { useEffect, useRef, useState } from 'react'

const PlayerInfo = () => {
  const { title, videoOwnerTitle, videoPublishDate } = useAtomValue(videoAtom)
  const [isTextWidthOver, setIsTextWidthOver] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const date = videoPublishDate.split('T')[0].replaceAll('-', '/')

  // Text가 컨테이너보다 길면 애니메이션 실행
  // テキストがコンテナより長い場合はアニメーションを実行
  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current

    if (!container || !text) return

    const isTextOverflowing = text.offsetWidth >= container.offsetWidth
    setIsTextWidthOver(isTextOverflowing)
  }, [title])

  return (
    <div className="w-full h-20 flex flex-col mt-2">
      <div
        ref={containerRef}
        className="flex justify-center items-center gap-2"
      >
        <span
          ref={textRef}
          className={`text-4xl font-bold whitespace-nowrap ${
            isTextWidthOver ? 'animate-marquee' : ''
          }`}
        >
          {title}
        </span>
      </div>
      <div className="flex h-full justify-between items-end">
        <span>{videoOwnerTitle}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

export default PlayerInfo
