import { Button, Card, CardBody, CardHeader, Center, HStack, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import AjantaLocation from '../Assets/Location/AjantaLocation.png';
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons';

export default function Footer() {
  const brands=["Raymond","Reid & Taylor","OCM","Siyaram","Monte Carlo","Oxemberg","J. Hampstead"]
  const oBrands=["Birla Century","Linen Club","Arvind"]
  return (
    <Center bgColor={"#206462"} color={"white"} h={"450px"} w={"100%"}>
      <SimpleGrid minChildWidth={"150px"} w={"85%"}>
        <VStack alignItems={"start"} bgColor={""}>
          <Text fontWeight={"bold"} fontSize={"x-large"}>
            BRANDS
          </Text> 
          {
            brands.map((item,index)=>{
              return(
                <Text fontSize={"medium"} key={index} color={"#f1f2f4"}>{item}</Text>
              )
            })
          }
        </VStack>
        <VStack alignItems={"start"} bgColor={""}>
          <Text fontWeight={"bold"} fontSize={"x-large"}>
            OTHERS
          </Text> 
          {
            oBrands.map((item,index)=>{
              return(
                <Text fontSize={"medium"} key={index} color={"#f1f2f4"}>{item}</Text>
              )
            })
          }
        </VStack>
        <VStack alignItems={"start"} bgColor={""} id='contact us'>
          <Text fontWeight={"bold"} fontSize={"x-large"}>
            Contact Us
          </Text> 
          <Text fontSize={"medium"} color={"#f1f2f4"}>+91 9999999999</Text>
          <Text fontSize={"medium"} color={"#f1f2f4"}>abc@example.com</Text>

        </VStack>
        <Card alignItems={"center"} boxShadow={"2px 2px 10px black"} h={"260px"}>
          <CardHeader >
            <Image src={AjantaLocation} border={"1px solid gray"} borderRadius={5}></Image>
          </CardHeader>
          <Link href="https://maps.app.goo.gl/JYJ2PmfBrctkfzeN7" w={"90%"} target='_blank'>
            <Button colorScheme='teal' w={"100%"} mt={-2} formAction='http://www/google.com'>
              <ExternalLinkIcon/> 
              <Text ml={3}>Locate Us</Text>
            </Button>
          </Link>
        </Card>
      </SimpleGrid>
    </Center>
  )
}
