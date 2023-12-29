import { Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export default function SearchElements() {
  return (
    <>
      <SimpleGrid p={"10px"} spacing={0} 
        minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
        mt={6} ml={"1%"} rowGap={6} 
        overflowY={"scroll"}
        borderTop={"1px solid lightgray"}
      >
        
        {/* Items */}
        <Image 
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          h={{base:"220px", sm: "340px",md:"420px",xl:"470px"}}
          borderRadius={20}
        />
        <Image 
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          // h="500px"
          h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
          borderRadius={20}
        />
        <Image 
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          // h="500px"
          h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
          borderRadius={20}
        />
        <Image 
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          // h="500px"
          h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
          borderRadius={20}
        />
        <Image 
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          // h="500px"
          h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
          borderRadius={20}
        />
        <Image 
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          // h="500px"
          h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
          borderRadius={20}
        />
        <Image 
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          // h="500px"
          h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
          borderRadius={20}
        />
        <Image 
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          // h="500px"
          h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
          borderRadius={20}
        />
      </SimpleGrid> 
    </>
  )
}
