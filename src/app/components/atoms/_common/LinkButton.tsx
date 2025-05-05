'use client'

import Link from 'next/link'

interface Props {
  /**
   * 表示するText
   */
  text: string
  /**
   * link href
   */
  link: string
}

const LinkButton = ({ text, link }: Props) => {
  return <Link href={`${link}`}>{text}</Link>
}

export default LinkButton
