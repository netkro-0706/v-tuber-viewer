import videoAtom from '@/app/store/videoAtom'
import { useAtomValue } from 'jotai'

const Player = () => {
  const { videoId } = useAtomValue(videoAtom)

  return (
    <div className="w-full h-[550px] flex justify-center items-center">
      <div className="w-[80%] h-full max-h-[440px] flex justify-center items-center">
        {videoId ? (
          <iframe
            className="w-full max-w-[950px] max-h-[530px] aspect-video border-2 border-gray-500 rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="youtube player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <p>No video selected</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Player
