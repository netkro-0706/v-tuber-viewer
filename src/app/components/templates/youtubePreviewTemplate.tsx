import ReactQuerySSRProvieder from '@/app/_provider/ReactQuerySSRProvieder'
import BasicContainder from '../layout/BasicContainer'
import YoutubePlayList from '../molecules/youtubePreview/youtubePlayList'
import { GetQueryData } from '@/app/lib/getQueryData'

const YoutubePreviewTemplate = async () => {
  const youtubeDataState = await GetQueryData()

  return (
    <BasicContainder>
      <div className="w-full pl-3 pr-3">
        <p>This is YoutubeList Page</p>

        <ReactQuerySSRProvieder dehydratedState={youtubeDataState}>
          <YoutubePlayList />
        </ReactQuerySSRProvieder>
      </div>
    </BasicContainder>
  )
}

export default YoutubePreviewTemplate
