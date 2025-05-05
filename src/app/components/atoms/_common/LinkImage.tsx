'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Props {
  /**
   *  image src
   */
  src: string
  /**
   * image width
   */
  imgWidth: number
  /**
   * image height
   */
  imgHeight: number
  /**
   * link href
   */
  link: string
}

const LinkImage = ({ src, imgWidth, imgHeight, link }: Props) => {
  return (
    <Link href={`${link}`}>
      <Image src={src} width={imgWidth} height={imgHeight} alt="link Image" />
    </Link>
  )
}

export default LinkImage
