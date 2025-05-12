'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { API_KEY, API_URL } from '../constants/env'
import axios from 'axios'
import { Youtube } from '../types/youtubeTypes'
import MOVIELISTID from '../constants/movieList'

const initList = MOVIELISTID.ALLMUSIC
const maxResults = 10

// export const fetchPlayList = async (): Promise<Youtube> => {
//   const response = await axios.get<Youtube>(API_URL, {
//     params: {
//       part: 'snippet',
//       playlistId,
//       maxResults,
//       pageToken: '',
//       key: API_KEY,
//     },
//   })

//   return response.data
// }

export const fetchInfinitePlayList = async ({
  playlistId = initList,
  pageParam = '',
}): Promise<Youtube> => {
  const response = await axios.get<Youtube>(API_URL, {
    params: {
      part: 'snippet',
      playlistId,
      maxResults,
      pageToken: pageParam,
      key: API_KEY,
    },
  })

  return response.data
}

// データ取得のQuery
// export const usePlaylist = () => {
//   return useQuery({
//     queryKey: ['youtube-playlist'],
//     queryFn: fetchPlayList,
//     staleTime: 1000 * 60 * 5,
//   })
// }

// データ取得のinfiniteQuery
export const useInfinitePlaylist = (playListId = initList) => {
  return useInfiniteQuery({
    queryKey: ['youtube-playlist', playListId],
    queryFn: ({ pageParam = '' }) =>
      fetchInfinitePlayList({ playlistId: playListId, pageParam }),
    initialPageParam: '',
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageToken ?? undefined
    },
    staleTime: 1000 * 1,
    // 영상 player에 데이터를 담기위해 cache삭제
    // 動画playerにデータを渡すためcache削除
    gcTime: 1000 * 1,
  })
}
