export interface Youtube {
  kind: string
  etag: string
  nextPageToken: string
  items: YoutubeItem[]
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export interface YoutubeItem {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: Thumbnail
      medium: Thumbnail
      high: Thumbnail
      standard: Thumbnail
      maxres: Thumbnail
    }
    channelTitle: string
    playlistId: string
    position: number
    resourceId: {
      kind: string
      videoId: string
    }
    videoOwnerChannelTitle: string
    videoOwnerChannelId: string
  }
}

export interface Thumbnail {
  url: string
  width: number
  height: number
}
