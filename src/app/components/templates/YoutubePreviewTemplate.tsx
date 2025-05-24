import ReactQuerySSRProvider from '@/app/providers/ReactQuerySSRProvider'
import BasicContainer from '../layout/BasicContainer'
import YoutubePlayList from '../organisms/youtubePreview/YoutubePlayList'
import { GetQueryData } from '@/app/lib/getQueryData'
import { Suspense } from 'react'

const YoutubePreviewTemplate = async () => {
  const youtubeDataState = await GetQueryData()

  return (
    <BasicContainer>
      <div className="w-full pl-3 pr-3">
        <ReactQuerySSRProvider dehydratedState={youtubeDataState}>
          <Suspense fallback={<div>Loading...</div>}>
            <YoutubePlayList />
          </Suspense>
        </ReactQuerySSRProvider>
      </div>
    </BasicContainer>
  )
}

export default YoutubePreviewTemplate
