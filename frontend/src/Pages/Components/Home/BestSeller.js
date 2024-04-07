import { 
  Heading,
  SimpleGrid } from '@chakra-ui/react'
import Card from '../Card'

export default function BestSeller() {
  return (
    <>
      {/* Heading */}
      <Heading ml={"2%"} mt="7">OUR BESTSELLER</Heading>

      {/* Grid for Bestseller items */}
      <SimpleGrid p={"10px"} spacing={0} 
        minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
        mt={10} ml={"1%"} rowGap={10} 
      >
        
        {/* Items */}
        <Card
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          desc='SHORT DESCRIPTION'
        />
        <Card
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          desc='SHORT DESCRIPTION'
        />
        <Card
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          desc='SHORT DESCRIPTION'
        />
        <Card
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          desc='SHORT DESCRIPTION'
        />
        <Card
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          desc='SHORT DESCRIPTION'
        />
        <Card
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          desc='SHORT DESCRIPTION'
        />
        <Card
          src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
          desc='SHORT DESCRIPTION'
        />
      </SimpleGrid> 
    </>
  )
}
