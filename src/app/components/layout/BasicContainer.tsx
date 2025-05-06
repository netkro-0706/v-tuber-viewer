import { HasChildren } from '@/app/utils/interface'
import { FC } from 'react'

const BasicContainder: FC<HasChildren> = ({ children }) => {
  return <div className="w-full max-w-[1700px] mr-auto ml-auto">{children}</div>
}

export default BasicContainder
