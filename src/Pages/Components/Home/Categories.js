import { 
  Button, 
  Center, 
  HStack, 
  Heading, 
  Image, 
  Text, 
  VStack } from '@chakra-ui/react'

export default function Categories() {

  // categories array
  const categories= [
    {
      name:"MEN",
      src:"https://img.tatacliq.com/images/i8/437Wx649H/MP000000014691383_437Wx649H_202209291631361.jpeg"
    }
    ,{
      name:"WOMEN",
      src:"https://img.tatacliq.com/images/i13/437Wx649H/MP000000019327182_437Wx649H_202309200310261.jpeg"
    }
  ]
  
  return (
    <>

      {/* Categories Wrapper */}
      <HStack mt={10} spacing={-2} flexDirection={{base:"column",md:"row"}}>

        {/* Category Button */}
        <Button h={"300px"} w={"400px"} ml={"2%"} borderRadius={20} colorScheme='gray' 
          display={{base:"none",md:"initial"}}
        >

          {/* Category Button Text */}
          <VStack align={"start"} w={"75%"} fontWeight={"bold"} spacing={-2}>
            <Text fontWeight={"bold"}>OUR</Text>
            <Heading >Main Categories</Heading>
            <Text fontSize={"x-large"}>As gorgeous as you</Text>
          </VStack>

        </Button>

        {/* Categories i.e. MEN & WOMEN */}
        <HStack justify={"space-evenly"} >
          {
            // looping categories array
            categories.map((obj,index)=>{

              return(
                <Center bgColor={"white"} h={{base:"200px",md:"300px"}} 
                  w={{base:"150px",md:"220px"}} ml={{md:"2%"}} borderRadius={20}
                  key={index}
                >

                  {/* category image */}
                  <Image src={obj.src} h={"100%"} w={"100%"} borderRadius={20}/>

                  {/* category name */}
                  <Heading color={"white"} position={"absolute"} 
                    letterSpacing={3} mt={10}
                    textShadow={"1px 1px 5px gray"}
                  >
                    {obj.name}
                  </Heading>              
                </Center>
              )
            })
          }
        </HStack>
      </HStack>
    </>
  )
}