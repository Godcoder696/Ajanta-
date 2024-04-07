import { Box, Center, Image, SlideFade } from '@chakra-ui/react'
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
                    // filter={enter?"blur(3px)":""}
                />
                    
                {
                    enter && 
                    <>
                       
                        <Center pos={"absolute"}
                            background={"linear-gradient(#f1f2f400,#2c7a7b)"}
                            fontSize={{base:"small",md:"large",xl:"x-large"}}
                            h={{base:"220px", sm: "340px",md:"420px",xl:"470px"}}
                            w={{base:"150px",sm:"200px",md:"300px"}}
                            alignItems={"center"}
                            borderRadius={20}
                        >
                        </Center>
                        <Center pos={"absolute"} fontWeight={"bold"} color={"white"} 
                            fontSize={{base:"small",md:"large",xl:"x-large"}}
                            h={{base:"220px", sm: "340px",md:"420px",xl:"470px"}}
                            w={{base:"150px",sm:"200px",md:"300px"}}
                        >
                            <SlideFade  in={true} offsetY='200px'>
                                {props.desc}
                            </SlideFade>
                        </Center>
                    </>
                }
            </Center>
        </Center> 
    </>
  )
}
