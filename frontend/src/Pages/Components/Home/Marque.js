import { Center, HStack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import raymond from '../../../Assets/Brands/raymond-transparent-free-png.webp';
import Marquee from "react-fast-marquee";

export default function Marque() {
  
  return (
    <>
      <Marquee speed={80} pauseOnHover={true}
        loop={0} gradient={true} gradientColor='#f1f2f4'
        autoFill={false}
      >
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
      </Marquee>
    </>
  )
}
