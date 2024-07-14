import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import { HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminMobileNav from './AdminMobileNav'

function DashboardHeading({setOpenDrawer, nav, setNav}) {
    const [mobileNav,setMobileNav]= useState(false);
  return (
    <>
        <HStack pos="sticky" top="0" bgColor="white" justifyContent="space-between" px={5} py={4} w="100%">
            <HStack bgColor="white" justifyContent="space-between" px={5} py={4} w="100%">
                <Text fontSize={
                    {
                    base:"30",
                    md:"40"
                    }
                } fontWeight="20px">
                    {
                        nav==0?
                        "Men Section"
                        :
                        (
                            nav==1?
                            "Women Section"
                            :
                            "Analytics"
                        )
                    }
                </Text>
                <HStack spacing={3} flex alignItems="center">
                    <HStack rounded="50%" bgColor="#38B2AC" p={3} ml={4}  h={10} w={10} cursor="pointer" 
                        onClick={()=>{setOpenDrawer(true)}}
                        _hover={{"bgColor":"#319795"}}
                    >
                        <AddIcon color="white"/>
                    </HStack>
                    <HamburgerIcon h={8} w={8}
                        display={{
                            base: "initial",
                            md: "none"
                        }}
                        onClick={()=>{setMobileNav(true)}}
                    />
                </HStack>
            </HStack>
        </HStack> 
        <AdminMobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} setNav={setNav}/>
    </>
  )
}

export default DashboardHeading