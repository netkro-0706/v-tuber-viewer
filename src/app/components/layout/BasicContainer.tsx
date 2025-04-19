import { HasChildren } from "@/app/util/interface"
import { FC } from "react"

const BasicContainder: FC<HasChildren> = ({ children }) => {
  return <div className="w-[1700px] mr-auto ml-auto">{children}</div>
}

export default BasicContainder
