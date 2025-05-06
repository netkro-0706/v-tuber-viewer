'use client'

import { ButtonAttrs } from '@/app/types/commonTypes'
import Image from 'next/image'
import { ForwardRefRenderFunction } from 'react'

interface Props extends ButtonAttrs {
  /**
   *  image src
   */
  src: string
  /**
   * image width
   */
  imgWidth?: number
  /**
   * image height
   */
  imgHeight?: number
  /**
   * image fill
   */
  isFill?: boolean
  /**
   * image sizes width with isFill
   */
  sizes?: string
  /**
   * image className
   */
  className?: string
}

const ButtonImage: ForwardRefRenderFunction<HTMLButtonElement, Props> = ({
  src,
  imgWidth,
  imgHeight,
  isFill = false,
  sizes,
  type = 'button',
  className,
  ...attrs
}: Props) => {
  const isRelative = isFill ? 'relative w-full h-full' : ''

  const width = !isFill ? imgWidth : undefined
  const height = !isFill ? imgHeight : undefined

  return (
    <button className={isRelative} type={type} {...attrs}>
      <Image
        src={src}
        width={width}
        height={height}
        fill={isFill}
        {...(isFill && sizes ? { sizes } : {})}
        alt="link Image"
        className={className}
      />
    </button>
  )
}

export default ButtonImage
