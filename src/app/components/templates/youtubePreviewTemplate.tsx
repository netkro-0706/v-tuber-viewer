import ReactQuerySSRProvider from '@/app/providers/ReactQuerySSRProvider'
import BasicContainer from '../layout/BasicContainer'
import YoutubePlayList from '../organisms/youtubePreview/YoutubePlayList'
import { GetQueryData } from '@/app/lib/getQueryData'

const YoutubePreviewTemplate = async () => {
  const youtubeDataState = await GetQueryData()

  return (
    <BasicContainer>
      <div className="w-full pl-3 pr-3">
        <p>This is YoutubeList Page</p>

        <ReactQuerySSRProvider dehydratedState={youtubeDataState}>
          <YoutubePlayList />
        </ReactQuerySSRProvider>
      </div>
    </BasicContainer>
  )
}

export default YoutubePreviewTemplate
