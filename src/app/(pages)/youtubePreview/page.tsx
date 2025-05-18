import YoutubePreviewTemplate from '@/app/components/templates/YoutubePreviewTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'v-tuber-viewer',
  description: 'v-tuber youtube previwer',
  openGraph: {
    title: 'v-tuber-viewer',
    description: 'v-tuber youtube previwer',
    images: ['/waktaverse.png'],
  },
}

export default function YoutubeListPage() {
  return <YoutubePreviewTemplate />
}
