"use client"

import Image from "next/image"
import Link from "next/link"

interface Props {
  image: string
  imgWidth: number
  imgHeight: number
  link: string
}

const LinkImage = ({ image, imgWidth, imgHeight, link }: Props) => {
  return (
    <Link href={`${link}`}>
      <Image src={image} width={imgWidth} height={imgHeight} alt="link Image" />
    </Link>
  )
}

export default LinkImage
