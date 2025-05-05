'use client'

import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { API_KEY, API_URL } from '../constants/env'
import axios from 'axios'
import { Youtube } from '../types/youtubeTypes'

const isedol = 'PLWTycz4el4t7ZCxkGYyekoP1iBxmOM4zZ'
const playlistId = isedol
const maxResults = 10

export const fetchPlayList = async (): Promise<Youtube> => {
  const response = await axios.get<Youtube>(API_URL, {
    params: {
      part: 'snippet',
      playlistId,
      maxResults,
      pageToken: '',
      key: API_KEY,
    },
  })

  return response.data
}

export const fetchInfinitePlayList = async ({
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
export const usePlaylist = () => {
  return useQuery({
    queryKey: ['youtube-playlist'],
    queryFn: fetchPlayList,
    staleTime: 1000 * 60 * 5,
  })
}

// データ取得のinfiniteQuery
export const useInfinitePlaylist = () => {
  return useInfiniteQuery({
    queryKey: ['youtube-playlist'],
    queryFn: fetchInfinitePlayList,
    initialPageParam: '',
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageToken ?? undefined
    },
  })
}
