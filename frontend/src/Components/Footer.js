import { LinkIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import AjantaLocation from '../Assets/Location/AjantaLocation.png';
import MobFooter from './MobFooter';

export default function Footer() {
  const brands=["Raymond","Reid & Taylor","OCM","Siyaram","Monte Carlo","Oxemberg","J. Hampstead"]
  const oBrands=["Birla Century","Linen Club","Arvind"]
  let [hover,setHover]= useState(false)
  return (
    <section id='contact-us'>
      <Center bgColor={"#2c7a7b"} color={"white"} h={{xl:"400px",md:"350px"}} w={"100%"} 
        display={{base:"none",md:"flex"}}>

        <SimpleGrid minChildWidth={"150px"} w={"85%"}>
          <VStack alignItems={"start"} bgColor={""}>
            <Text fontWeight={"bold"} fontSize={"x-large"} color={"white"}>AUTHORIZED DEALER</Text> 
            {
              brands.map((item,index)=>{
                return(
                  <Text fontSize={"medium"} key={index} color={"#black"}>{item}</Text>
                )
              })
            }
          </VStack>
          <VStack alignItems={"start"} bgColor={""}>
            <Text fontWeight={"bold"} fontSize={"x-large"} color={"white"}>OTHERS</Text> 
            {
              oBrands.map((item,index)=>{
                return(
                  <Text fontSize={"medium"} key={index} >{item}</Text>
                )
              })
            }
          </VStack>
          <VStack alignItems={"start"} bgColor={""} id='contactUs'>
            <Text fontWeight={"bold"} fontSize={"x-large"} color={"white"}>CONTACT US</Text> 
            <Text fontSize={"medium"} color={"white"}>01666-222231</Text>
            <Text fontSize={"medium"} color={"white"}>92543-22231</Text>
            <Text fontSize={"medium"} color={"white"}>Ajantasirsa@gmail.com</Text>
          </VStack>

          <Link href='https://maps.app.goo.gl/JYJ2PmfBrctkfzeN7' target='_blank' display={{base:"none",xl:"initial"}}>
            <Center h={"70%"} w={"80%"} borderRadius={"20"} cursor={"pointer"}
              onMouseOver={()=>setHover(true)}
              onMouseOut={()=>setHover(false)}
            >
              <Image src={AjantaLocation} h={"100%"} w={"100%"} 
                borderRadius={"20"} boxShadow={"1px 1px 3px black"}
                filter={hover?"blur(2px)":""}
                />
                
                <Button display={hover?"flex":"none"} 
                  pos={"absolute"} colorScheme='teal' >
                  <LinkIcon/>
                  <Text ml={3}>LOCATE US</Text>
                </Button>
            </Center>
          </Link>

          <Button alignSelf={"flex-end"}
            display={{base:"none",md:"flex",xl:"none"}}
            justifySelf={"flex-end"}
            mt={"5"}
            pos={"absolute"} colorScheme='teal' >
            <LinkIcon/>
            
              <Text ml={3}>LOCATE US</Text>
          </Button>

        </SimpleGrid>
      </Center>
      <Box display={{md:"none"}}>
        <MobFooter></MobFooter>
      </Box>
    </section>
  )
}