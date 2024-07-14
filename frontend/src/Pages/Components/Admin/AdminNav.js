import { Box, Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav({setNav,nav}) {
    const navbar= ["Men","Women","Analytics"]
  return (
    <VStack 
        w={
            {
                md:"35vw",
                xl:"20vw"
            }
        } 
        h="100vh" bgColor="#f1f2f4" alignItems="start" px={7} py={6}
        display={
            {
                base:'none',
                md:'initial'
            }
        }
    >
        {
            navbar.map((item,key)=>{
                return (
                    <Box w={"100%"} cursor="pointer" p={3} rounded="0.5rem" key={key} _hover={{"bgColor": "teal", "color":"white"}}
                        bgColor={
                            `${nav==key?"teal":""}`
                        }
                        color={
                            `${nav==key?"white":"black"}`
                        }
                        onClick={()=>{
                            setNav(key);
                        }}
                        mt={4}
                    >
                        <Text fontSize={17}>{item}</Text>
                    </Box>
                )
            })
        }
    </VStack>
  )
}

export default AdminNav
