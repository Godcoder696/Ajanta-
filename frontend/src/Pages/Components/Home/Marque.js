import { Image } from '@chakra-ui/react';
import React from 'react';
import Marquee from "react-fast-marquee";
import raymond from '../../../Assets/Brands/raymond-transparent-free-png.webp';
import birla from '../../../Assets/Brands/Birla.png';
import JHampstead from '../../../Assets/Brands/JHampstead.png';
import LinenClub from '../../../Assets/Brands/LinenClub.jpg';
import MonteCarlo from '../../../Assets/Brands/Monte Carlo.png';
import ocm from '../../../Assets/Brands/ocm.jpg';
import oxemberg from '../../../Assets/Brands/oxemberg.png';
import ReidTaylor from '../../../Assets/Brands/Reid&Taylor.png';
import Siyaram from '../../../Assets/Brands/Siyaram.png';
import arvind from '../../../Assets/Brands/arvind.png';

export default function Marque() {
  
  return (
    <>
      <Marquee speed={80} pauseOnHover={true}
        loop={0}
         gradient={true} gradientColor='#f1f2f4'
        autoFill={false}>
        <Image src={raymond} boxSize={"190px"} ml={20}/>
        <Image src={birla} height={"100px"} width={"350px"} ml={20}/>
        <Image src={JHampstead} height={"100px"} width={"250px"} ml={20}/>
        <Image src={LinenClub} height={"100px"} width={"300px"} ml={20}/>
        <Image src={MonteCarlo} height={"100px"} width={"350px"} ml={20}/>
        <Image src={ocm} height={"100px"} width={"200px"} ml={20}/>
        <Image src={oxemberg} height={"100px"} width={"260px"} ml={20}/>
        <Image src={ReidTaylor} height={"130px"} width={"280px"} ml={20}/>
        <Image src={Siyaram} height={"250px"} width={"280px"} ml={20}/>
        <Image src={arvind} height={"100px"} width={"200px"} ml={20}/>
      </Marquee>
    </>
  )
}
