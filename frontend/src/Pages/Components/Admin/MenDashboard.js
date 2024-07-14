import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Men from './Men'
import {AddIcon} from '@chakra-ui/icons'

function MenDashboard() {
  return (
    <>
        <HStack pos="sticky" top="0" bgColor="white" justifyContent="space-between" px={5} py={4}>
            <Text fontSize={40} fontWeight="20px">Men Section</Text>
            <HStack rounded="50%" bgColor="teal" p={3} ml={4}  h={10} w={10} cursor="pointer">
            <AddIcon color="white"/>
            </HStack>
        </HStack>
        <Men/>
    </>
  )
}

export default MenDashboard
