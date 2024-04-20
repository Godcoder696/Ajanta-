import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Button, Center, HStack, Image, Progress } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";

export default function Slider(params) {

  let [imgIndex,setImgIndex]= useState(0);
  let [nextSlide,setNextSlide]= useState(false)
  let [prevSlide,setPrevSlide]= useState(false)

  useEffect(()=>{

    const interval=setInterval(()=>{
      setImgIndex((imgIndex+1)%5)
    },2000)

    if(nextSlide){
      setImgIndex((imgIndex+1)%5)
      setNextSlide(false)
      return ()=> clearInterval(interval)  
    }
    if(prevSlide){
      setImgIndex(()=> imgIndex===0?4:(imgIndex-1)%5)
      setPrevSlide(false)
      return ()=> clearInterval(interval)  
    }

    return ()=> clearInterval(interval)

  },[imgIndex,nextSlide,prevSlide])
  return (
    <>
      <Center>
        <SimpleImageSlider
          autoPlay="true"
          slideDuration={0.6}
          width={"100%"}
          height={500}
          images={params.imgArr}
          showBullets={true}
          showNavs={true}
        />
      </Center>
    </>
  )
}