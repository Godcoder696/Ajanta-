import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Button, Center, HStack, Image, Progress } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";

export default function Slider() {
  const imgArr=[
    {url:"https://i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg"},
    {url:"https://i.pinimg.com/originals/da/99/ce/da99ce38482fb78692583d255a1de64d.jpg"},
    {url:"https://i.pinimg.com/originals/f3/66/6c/f3666c5ad466a64d0a64fa07debcdd3d.jpg"},
    {url:"https://i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg"},
    {url:"https://i.pinimg.com/originals/da/99/ce/da99ce38482fb78692583d255a1de64d.jpg"},
  ]

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
      
      {/* <Center bgColor={"#f1f2f4"} w={"100%"} h={{base:"30vh",xl:"63vh"}}
        zIndex={-1} mt={1} overflow={"hidden"}
      >

        <Image src={imgArr[imgIndex]}
          position={"start"}
          h={{base:"40vh",xl:"95vh"}}
          w={"98%"}
          borderTopRadius={10}
          id='imageSlider'
        />

        <HStack position={"absolute"} justify={"space-between"} w={"98%"} 
          color={"white"}
        >

          <Button bgColor={"white"} h={20} w={12} borderLeftRadius={0} 
            cursor={"pointer"} colorScheme='teal' display={{base:"none",md:"initial"}}
            onClick={()=>setPrevSlide(true)}
          >

            <ArrowLeftIcon display={{base:"none",md:"initial"}} color={"black"} />

          </Button>

          <Button bgColor={"white"} h={20} w={12} borderRightRadius={0} 
            cursor={"pointer"} colorScheme='teal' display={{base:"none",md:"initial"}}
            onClick={()=>setNextSlide(true)}
          >

            <ArrowRightIcon color={"black"} display={{base:"none",md:"initial"}}    />

          </Button>
        </HStack>
      </Center> */}

      <Center>
        <SimpleImageSlider
          autoPlay="true"
          slideDuration={0.6}
          width={"100%"}
          height={504}
          images={imgArr}
          showBullets={true}
          showNavs={true}
        />
      </Center>

      {/* slider progress bar */}
      {/* <Center>
        <Progress h={2} w={'98%'} value={20*(imgIndex+1)} size='xs' colorScheme='teal' />
      </Center> */}
    </>
  )
}