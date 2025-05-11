import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchInfinitePlayList } from '../api/getYoutubePlayList'
import MOVIELISTID from '../constants/movieList'

const initList = MOVIELISTID.ALLMUSIC

interface Props {
  playListId?: string
}

export async function GetQueryData({ playListId = initList }: Props = {}) {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['youtube-playlist', playListId],
    queryFn: ({ pageParam = '' }) =>
      fetchInfinitePlayList({ playlistId: playListId, pageParam }),
    initialPageParam: '',
  })

  return dehydrate(queryClient)
}
