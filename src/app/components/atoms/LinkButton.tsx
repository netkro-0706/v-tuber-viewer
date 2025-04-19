"use client"

import Link from "next/link"

interface Props {
  text: string
  link: string
}

const LinkButton = ({ text, link }: Props) => {
  return <Link href={`${link}`}>{text}</Link>
}

export default LinkButton
