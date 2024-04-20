import { Center, Image } from '@chakra-ui/react'
import React from 'react'

export default function Card(props) {
  return (
    <>
     <Center
            w={"100%"}
            minH={{base:"220px",sm:"340px",md:"420px",xl:"470px"}}
        >
            <Center cursor={"pointer"}>
                <Image
                    src={props.src}
                    h={{base:"220px", sm: "340px",md:"420px",xl:"470px"}}
                    w={{base:"150px",sm:"200px",md:"300px"}}
                    borderRadius={20}
                />
            </Center>
        </Center> 
    </>
  )
}
