'use client'

import { useQuery } from '@tanstack/react-query'
import { API_KEY, API_URL } from '../constants/env'
import axios from 'axios'
import { Youtube } from '../types/youtubeTypes'

export const fetchPlayList = async (): Promise<Youtube> => {
  const isedol = 'PLWTycz4el4t7ZCxkGYyekoP1iBxmOM4zZ'
  const playlistId = isedol
  const maxResults = 10

  const response = await axios.get<Youtube>(API_URL, {
    params: {
      part: 'snippet',
      playlistId,
      maxResults,
      key: API_KEY,
    },
  })

  return response.data
}

export const usePlaylist = () => {
  return useQuery({
    queryKey: ['youtube-playlist'],
    queryFn: fetchPlayList,
    staleTime: 1000 * 60 * 5,
  })
}
