import { HasChildren } from '@/app/util/interface'
import { FC } from 'react'

const NavContainder: FC<HasChildren> = ({ children }) => {
  return (
    <div className="w-full max-w-[1700px] mr-auto ml-auto h-[56px] flex items-center">
      {children}
    </div>
  )
}

export default NavContainder
