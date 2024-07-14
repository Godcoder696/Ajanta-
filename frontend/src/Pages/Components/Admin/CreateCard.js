import { Box, Button, HStack, Input, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { AttachmentIcon, CheckCircleIcon } from '@chakra-ui/icons'

function CreateCard({openDrawer,setOpenDrawer}) {
    const [section, setSection]= useState(null);
  return (
    <>
        <Drawer
            isOpen={openDrawer}
            placement='right'
            onClose={()=>{setOpenDrawer(false)}}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create Card</DrawerHeader>

            <DrawerBody>
                <label for="file-upload" class="custom-file-upload">
                    <AttachmentIcon h={30} w={30}/>
                    <span>Upload File</span>
                </label>
                <input id="file-upload" type="file" />
                <Box w="100%" flex flexDir="column" justifyContent="start" mt={7}>
                    <div>Choose Section:</div>
                    <HStack mt={3}>
                        <Button 
                            leftIcon={section==="men"?<CheckCircleIcon/>:""}
                            colorScheme={section==="men"?"teal":"gray"}
                            onClick={()=>{setSection("men")}}
                        >
                            Men
                        </Button>
                        <Button
                            leftIcon={section==="women"?<CheckCircleIcon/>:""}
                            colorScheme={section==="women"?"teal":"gray"}
                            onClick={()=>{setSection("women")}}
                        >
                            Women
                        </Button>
                    </HStack>
                </Box>
            </DrawerBody>

            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={()=>{setOpenDrawer(false)}} colorScheme='red'>
                Cancel
                </Button>
                <Button colorScheme='teal' onClick={()=>{setOpenDrawer(false)}}>Create</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default CreateCard
