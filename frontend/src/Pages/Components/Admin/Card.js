import { Center, HStack, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AppState } from '../../../Context/AppProvider';
import {EditIcon, DeleteIcon} from '@chakra-ui/icons'
import EditCard from './EditCard';

function Card() {
    const [openDrawer,setOpenDrawer]= useState(false);
  return (
    <>
        <Center
            w={"100%"}
            minH={{base:"220px",sm:"340px",md:"420px",xl:"470px"}}
        >
            <Center cursor={"pointer"} flex flexDir="column" alignItems="center">
                <Image
                    src={"https://i.pinimg.com/564x/c2/fc/9d/c2fc9d585f744fdc86993f2d062848b1.jpg"}
                    h={{base:"220px", sm: "340px",md:"420px",xl:"470px"}}
                    w={{base:"150px",sm:"200px",md:"300px"}}
                    borderRadius={20}
                />
                <HStack bgColor="#f1f2f4" py={2} px={4} rounded="1rem" mt={2} spacing={4}>
                <EditIcon h={5} w={5} _hover={{"color": "teal"}} 
                    onClick={()=>{setOpenDrawer(true)}}
                />
                <DeleteIcon h={5} w={5} _hover={{"color": "teal"}}/>
                </HStack >
            </Center>
        </Center>
        <EditCard openDrawer= {openDrawer} setOpenDrawer={setOpenDrawer}/>
    </>
  )
}

export default Card
