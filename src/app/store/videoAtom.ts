import { atom } from 'jotai'

const videoAtom = atom({
  title: '',
  videoId: '',
  videoOwnerTitle: '',
  videoPublishDate: '',
})

export default videoAtom
