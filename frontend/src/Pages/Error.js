import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import AjantaBlack from '../Assets/Logo/Ajanta_Sirsa-removebg.png';

export default function Error() {
  return (
    <>
      <VStack h={"100vh"} w="100vw" bgColor={"#e2e8f0"} justifyContent={"center"}>
        <Link to={"/"} boxSize={{base:10,sm:11,md:12,lg:13}} >
          <Image src={AjantaBlack} alt='Ajanta' boxSize={"80px"} />
        </Link>
        <Text fontSize={"30px"}>Page Not Found</Text>
        <Link to={"/"}>
          <Text cursor={"pointer"} fontWeight={"semibold"} fontSize={"17px"} className='err-redirection'>
            Click Me!
          </Text>
        </Link>
      </VStack>
    </>
  )
}
