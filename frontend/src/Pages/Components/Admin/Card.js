import { Center, HStack, Image, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AppState } from '../../../Context/AppProvider';
import {EditIcon, DeleteIcon} from '@chakra-ui/icons'
import EditCard from './EditCard';
import axios from 'axios';

function Card({item, index}) {
    const [openDrawer,setOpenDrawer]= useState(false);
    let {data, setData}= AppState([]);
    const toast= useToast();
  return (
    <>
        <Center
            w={"100%"}
            minH={{base:"220px",sm:"340px",md:"420px",xl:"470px"}}
        >
            <Center cursor={"pointer"} flex flexDir="column" alignItems="center">
                <Image
                    src={item.image}
                    h={{base:"220px", sm: "340px",md:"420px",xl:"470px"}}
                    w={{base:"150px",sm:"200px",md:"300px"}}
                    borderRadius={20}
                />
                <HStack bgColor="#f1f2f4" py={2} px={4} rounded="1rem" mt={2} spacing={4}>
                <EditIcon h={5} w={5} _hover={{"color": "teal"}} 
                    onClick={()=>{setOpenDrawer(true)}}
                />
                <DeleteIcon h={5} w={5} _hover={{"color": "teal"}}
                    onClick={async ()=>{
                        try {
                            await axios.post("/delete",{
                                id: item._id,
                                assetId: item.assetId+""
                            });
                            toast({
                                title: 'Card Deleted Successfully.',
                                description: "Refresh the page to view changes.",
                                status: 'success',
                                duration: 4000,
                                isClosable: true,
                            })
                            data.splice(index,1);
                            setData([...data]);
                        } catch (error) {
                            toast({
                                title: 'Error Occurred',
                                description: "Please Try Again Later!",
                                status: 'error',
                                duration: 4000,
                                isClosable: true,
                            })
                        }
                    }}
                />
                </HStack >
            </Center>
        </Center>
        <EditCard openDrawer= {openDrawer} setOpenDrawer={setOpenDrawer} item={item}/>
    </>
  )
}

export default Card
