import React from 'react'
import Men from './Men'
import { HStack, Text } from '@chakra-ui/react'
import Women from './Women'
import { AddIcon } from '@chakra-ui/icons'
import CreateCard from './CreateCard'

function WomenDashboard({openDrawer, setOpenDrawer}) {
  return (
    <>
      <HStack pos="sticky" top="0" bgColor="white" justifyContent="space-between" px={5} py={4}>
        <Text fontSize={40} fontWeight="20px">Women Section</Text>
        <HStack rounded="50%" bgColor="#38B2AC" p={3} ml={4}  h={10} w={10} cursor="pointer" 
            onClick={()=>{setOpenDrawer(true)}}
            _hover={{"bgColor":"#319795"}}
          >
          <AddIcon color="white"/>
        </HStack>
      </HStack>
      <Women/> 
      <CreateCard openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
    </>
  )
}

export default WomenDashboard
