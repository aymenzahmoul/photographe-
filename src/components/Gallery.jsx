"use client"
import Image from "next/image"
import {Parallax , ParallaxProvider} from 'react-scroll-parallax'

const Gall = [
    {src: '/assets/images/55.jpg' , title:'55', speed: 10},
    {src: '/assets/images/66.jpg' , title:'66', speed: 20},
    {src: '/assets/images/77.jpg' , title:'77', speed: 10},
    {src: '/assets/images/88.jpg' , title:'88', speed: 20},
   
]

export const Gallery  = () => {
  return (
    <ParallaxProvider>
<div className="flex gap-10  h-[38rem] max-w-[1600px] mx-auto justify-center align-middle overflow-hidden  max-w[1600px]">
  {Gall.map(({src, title , speed }) => (
    <Parallax speed ={speed}><Image src={src} alt={title} width={279} height={576}/></Parallax>
  ))}
  </div>
</ParallaxProvider>
  )
}


