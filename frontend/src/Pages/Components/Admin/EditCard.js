import { AttachmentIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Input, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

function EditCard({openDrawer,setOpenDrawer}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [section, setSection]= useState("men");
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
            <DrawerHeader>Edit Card</DrawerHeader>

            <DrawerBody>
                <label for="file-upload" class="custom-file-upload">
                    <AttachmentIcon h={30} w={30}/>
                    <span>Edit File</span>
                </label>
                <input id="file-upload" type="file" />
                <Box w="100%" flex flexDir="column" justifyContent="start" mt={7}>
                    <div>Edit Current Section:</div>
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
                <Button colorScheme='teal' onClick={()=>{setOpenDrawer(false)}}>Save</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default EditCard
