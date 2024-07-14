import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

const Women = () => {
  return (
    <SimpleGrid minChildWidth={{base:"150px",sm:"200px",md:"300px"}} w="100%" 
    mt={3} ml={"1%"} rowGap={8} columnGap={20}>
      <Card></Card>
      
      <Card></Card>
      
      <Card></Card>
      
      <Card></Card>
      
      <Card></Card>
    </SimpleGrid>
  )
}

export default Women
