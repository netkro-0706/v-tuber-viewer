import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchInfinitePlayList } from '../api/getYoutubePlayList'

export async function GetQueryData() {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['youtube-playlist'],
    queryFn: fetchInfinitePlayList,
    initialPageParam: '',
  })

  return dehydrate(queryClient)
}
