import { Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from '../Pages/Components/Card'

export default function SearchElements() {
  return (
    <>
      <SimpleGrid p={"20px"}
        minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
        mt={6} ml={"1%"} rowGap={8} 
        overflowY={"scroll"}
        borderTop={"1px solid lightgray"}
      >
        
        {/* Items */}
        
        <Card 
          desc="SHORT DESCRIPTION"
          src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
        />
        
        <Card 
          desc="SHORT DESCRIPTION"
          src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
        />
        
        <Card 
          desc="SHORT DESCRIPTION"
          src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
        />
        <Card 
          desc="SHORT DESCRIPTION"
          src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
        />
        <Card 
          desc="SHORT DESCRIPTION"
          src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
        />
        
      </SimpleGrid> 
    </>
  )
}
