import { 
  Heading,
  Image, 
  SimpleGrid } from '@chakra-ui/react'

export default function BestSeller() {
  return (
    <>
      {/* Heading */}
      <Heading ml={"2%"} mt="7">OUR BESTSELLER</Heading>

      {/* Grid for Bestseller items */}
      <SimpleGrid p={"10px"} spacing={0} 
        minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
        mt={10} ml={"1%"} rowGap={5} 
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
