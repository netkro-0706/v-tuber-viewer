import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchPlayList } from '../api/getYoutubePlayList'

export async function GetQueryData() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['youtube-playlist'],
    queryFn: fetchPlayList,
  })

  return dehydrate(queryClient)
}
