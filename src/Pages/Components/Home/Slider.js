import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Button, Center, HStack, Image, Progress } from '@chakra-ui/react'
import React from 'react'

export default function Slider() {
  return (
    <>
      
      <Center bgColor={"#f1f2f4"} w={"100%"} h={{base:"30vh",xl:"63vh"}}
        zIndex={-1} mt={1} overflow={"hidden"}
      >

        {/* Slider Image */}
        <Image src='https://i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg'  
          position={"start"}
          h={{base:"40vh",xl:"95vh"}}
          w={"98%"}
          borderTopRadius={10}
        />

        {/* slider button wrapper */}
        <HStack position={"absolute"} justify={"space-between"} w={"98%"} 
          color={"white"}
        >

          {/* left button */}
          <Button bgColor={"white"} h={20} w={12} borderLeftRadius={0} 
            cursor={"pointer"} colorScheme='teal' display={{base:"none",md:"initial"}}
          >

            {/* left icon */}
            <ArrowLeftIcon display={{base:"none",md:"initial"}} color={"black"} />

          </Button>

          {/* right button */}
          <Button bgColor={"white"} h={20} w={12} borderRightRadius={0} 
            cursor={"pointer"} colorScheme='teal' display={{base:"none",md:"initial"}}
          >

            {/* right icon */}
            <ArrowRightIcon color={"black"} display={{base:"none",md:"initial"}}    />

          </Button>
        </HStack>
      </Center>

      {/* slider progress bar */}
      <Center>
        <Progress h={2} w={'98%'} value={40} size='xs' colorScheme='teal' />
      </Center>
    </>
  )
}