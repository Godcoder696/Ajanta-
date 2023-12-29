import { Center, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Card(props) {
    let [enter,setEnter]= useState(false)
  return (
    <>
     <Center
            w={"100%"}
            minH={{base:"220px",sm:"340px",md:"420px",xl:"470px"}}
        >
            <Center
                onMouseOver={()=>setEnter(true)}
                onMouseOut={()=>setEnter(false)}
                cursor={"pointer"}
            >
                <Image
                    src={props.src}
                    h={{base:"220px", sm: "340px",md:"420px",xl:"470px"}}
                    w={{base:"150px",sm:"200px",md:"300px"}}
                    borderRadius={20}
                    filter={enter?"blur(3px)":""}
                />
                    
                {
                    enter && 
                    <Center pos={"absolute"} zIndex={1} color={"white"} 
                        fontSize={{base:"small",md:"large",xl:"x-large"}}
                        fontWeight={"bold"}
                        h={{base:"220px", sm: "340px",md:"420px",xl:"470px"}}
                        w={{base:"150px",sm:"200px",md:"300px"}}
                        alignItems={"center"}
                    >
                        <Text>{props.desc}</Text>
                    </Center>
                }
            </Center>
        </Center> 
    </>
  )
}
