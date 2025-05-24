import Image from 'next/image'
import BasicContainder from '../layout/BasicContainer'
import IdolButtons from '../molecules/home/IdolButtons'

const HomeTemplate = () => {
  return (
    <BasicContainder>
      <div className="relative w-full aspect-[2120/351] mb-6">
        <Image src={'/home/waktaverse_banner.png'} fill alt={'banner'} />
      </div>
      <IdolButtons />
    </BasicContainder>
  )
}

export default HomeTemplate
