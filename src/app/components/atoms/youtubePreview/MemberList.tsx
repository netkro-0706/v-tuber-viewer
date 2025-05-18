'use Client'

import { useSetAtom } from 'jotai'
import './MemberList.css'
import movieListIdAtom from '@/app/store/movieListIdAtom'
import MOVIELISTID from '@/app/constants/movieList'
import Image from 'next/image'
import { useRef, useState } from 'react'

const MemberList = () => {
  const setMovieListId = useSetAtom(movieListIdAtom)
  const [isCloseWak, setIsCloseWak] = useState(true)
  const [isCloseIsedol, setIsCloseIsedol] = useState(true)
  const wakRef = useRef(null)
  const isedolRef = useRef(null)

  // select list
  const onChangeMovieList = (id: string) => {
    setMovieListId(id)
  }

  // open/close wak box
  const onToggleWak = () => {
    setIsCloseWak(!isCloseWak)
  }

  // open/close isedol box
  const onToggleIsedol = () => {
    setIsCloseIsedol(!isCloseIsedol)
  }

  return (
    <div className="w-[700px] m-auto mt-4 mb-4 border border-black">
      <dl className="flex flex-col items-center justify-center">
        <dt
          className="w-full border-b border-black select-list"
          onClick={onToggleWak}
        >
          <Image
            src={`/woowakgood.png`}
            className="bg-green-800 cursor-pointer  object-contain"
            width={100}
            height={48}
            alt="woowakgood"
            style={{
              height: 'auto',
            }}
          />
        </dt>
        <dd
          ref={wakRef}
          className={`w-full grid grid-flow-col grid-cols-2 border-b border-black
            
            overflow-hidden transition-all duration-500 ease-in-out 
             ${isCloseWak ? 'max-h-0 opacity-0' : 'max-h-[121px] opacity-100'}`}
        >
          <div className="select-list">
            <button
              className="cursor-pointer hover:underline"
              onClick={() => onChangeMovieList(MOVIELISTID.ALLMUSIC)}
            >
              <Image
                src={`/all.png`}
                width={100}
                height={80}
                alt="all"
                style={{
                  height: 'auto',
                }}
              />
              <span>전체 노래</span>
            </button>
          </div>
          <div className="select-list">
            <button
              className="cursor-pointer hover:underline"
              onClick={() => onChangeMovieList(MOVIELISTID.WAKTAVERSE)}
            >
              <Image
                src={`/waktaverse.png`}
                className="bg-green-800 p-2"
                width={100}
                height={73}
                alt="waktaverse"
                style={{
                  height: 'auto',
                }}
              />
              <span>왁타버스</span>
            </button>
          </div>
        </dd>
        <dt
          className="w-full p-2 border-b border-black select-list"
          onClick={onToggleIsedol}
        >
          <Image
            src={`/isedol.png`}
            className="w-[100px] h-auto cursor-pointer"
            width={100}
            height={83}
            alt="isedol icon"
          />
        </dt>
        <dd
          ref={isedolRef}
          className={`w-full grid grid-flow-row grid-cols-3
            overflow-hidden transition-all duration-500 ease-in-out 
             ${isCloseIsedol ? 'max-h-0 opacity-0' : 'max-h-[280px] opacity-100'}`}
        >
          <div className="select-list">
            <button
              className="cursor-pointer hover:underline"
              onClick={() => onChangeMovieList(MOVIELISTID.INE)}
            >
              <Image
                src={`/ine.png`}
                className="w-[100px] h-auto"
                width={100}
                height={100}
                alt="ine"
              />
              <span>아이네</span>
            </button>
          </div>
          <div className="select-list">
            <button
              className="cursor-pointer hover:underline"
              onClick={() => onChangeMovieList(MOVIELISTID.JINGBURGER)}
            >
              <Image
                src={`/jingburger.png`}
                className="w-[100px] h-auto"
                width={100}
                height={100}
                alt="jingburger"
              />
              <span>징버거</span>
            </button>
          </div>
          <div className="select-list">
            <button
              className="cursor-pointer hover:underline"
              onClick={() => onChangeMovieList(MOVIELISTID.LILPA)}
            >
              <Image
                src={`/lilpa.png`}
                className="w-[100px] h-auto"
                width={100}
                height={100}
                alt="lilpa"
              />
              <span>릴파</span>
            </button>
          </div>
          <div className="select-list">
            <button
              className="cursor-pointer hover:underline"
              onClick={() => onChangeMovieList(MOVIELISTID.JURURU)}
            >
              <Image
                src={`/jururu.png`}
                className="w-[100px] h-auto"
                width={100}
                height={100}
                alt="jururu"
              />
              <span>주르르</span>
            </button>
          </div>
          <div className="select-list">
            <button
              className="cursor-pointer hover:underline"
              onClick={() => onChangeMovieList(MOVIELISTID.GOSEGU)}
            >
              <Image
                src={`/gosegu.png`}
                className="w-[100px] h-auto"
                width={100}
                height={100}
                alt="gosegu"
              />
              <span>고세구</span>
            </button>
          </div>
          <div className="select-list">
            <button
              className="cursor-pointer hover:underline"
              onClick={() => onChangeMovieList(MOVIELISTID.VICHAN)}
            >
              <Image
                src={`/vichan.png`}
                className="w-[100px] h-auto"
                width={100}
                height={100}
                alt="vichan"
              />
              <span>비챤</span>
            </button>
          </div>
        </dd>
      </dl>
    </div>
  )
}

export default MemberList
