import { AttachmentIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Input, Text, useDisclosure, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

function EditCard({openDrawer,setOpenDrawer,item}) {
    const [section, setSection]= useState(item.category);
    const [tab,setTab]= useState(item.tab);
    let [file,setFile]= useState(item.image);
    const [featured,setFeatured]= useState(item.featured || false);
    const toast= useToast();
    const [loading, setLoading]= useState(false);
    const onUpload=(e)=>{
      let reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
  
      reader.onload=()=>{
        setFile(reader.result);
      }
      reader.onerror=(error)=>{
        console.log(error);
      }
  }
  
    const fileUpload=async ()=>{
      if(!file){
          toast({
              title: "File can't be blank ",
              description: "Please give a file",
              status: 'warning',
              duration: 4000,
              isClosable: true,
          })
          return ;
      }
      if(section=="women" && tab==null){
          toast({
              title: "Select any one sub-section.",
              description: "Sub Section can't be blank for women",
              status: 'warning',
              duration: 4000,
              isClosable: true,
          })
          return ;
      }
      try {  
        await axios.post("/update",
          {
            id: item._id,
            image: file,
            category: section,
            featured: featured,
            tab: tab
          }
        );
        console.log("File uploaded!");
        setFile(null);
          toast({
              title: 'Card Updated.',
              description: "Refresh the page to view the changes.",
              status: 'success',
              duration: 4000,
              isClosable: true,
          })
          setOpenDrawer(false);
          window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }

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
                <label htmlFor="file-upload" className="custom-file-upload">
                    <AttachmentIcon h={30} w={30}/>
                    <span>Edit File</span>
                </label>
                <input id="file-upload" type="file" onChange={onUpload}/>
                <Button 
                    leftIcon={featured===true?<CheckCircleIcon/>:""}
                    colorScheme={featured===true?"teal":"gray"}
                    onClick={()=>{
                        setFeatured(!featured);
                    }}
                    mt={6}
                >
                    Featured
                </Button>
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
                    {
                        section==="women" && 
                        <>
                            <Text mt={4}>Choose Sub Section:</Text>
                            <HStack mt={3}>
                                <Button 
                                    leftIcon={(tab===0 || tab===null || tab===undefined)?<CheckCircleIcon/>:""}
                                    colorScheme={(tab===0 || tab===null || tab===undefined)?"teal":"gray"}
                                    onClick={()=>{setTab(0)}}
                                >
                                    ClothHouse
                                </Button>
                                <Button
                                    leftIcon={tab===1?<CheckCircleIcon/>:""}
                                    colorScheme={tab===1?"teal":"gray"}
                                    onClick={()=>{setTab(1)}}
                                >
                                    Collections
                                </Button>
                            </HStack>
                        </>
                    }
                </Box>
            </DrawerBody>

            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={()=>{setOpenDrawer(false)}} colorScheme='red'>
                  Cancel
                </Button>
                <Button colorScheme='teal' 
                  isLoading= {loading}
                  onClick={async()=>{
                      setLoading(true);
                      await fileUpload();
                      setLoading(false);
                  }}
                >Save</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default EditCard
